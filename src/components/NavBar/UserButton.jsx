import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const UserButton = ({ user }) => {
  return (
    <div>
      {!user && (
        <DropdownToggle nav caret>
          <Button outline color="warning" size="sm">
            Sign Up / Sign In
          </Button>{' '}
        </DropdownToggle>
      )}
      {user && (
        <DropdownToggle nav caret>
          <Button outline color="warning" size="sm">
            {user.name}
          </Button>{' '}
        </DropdownToggle>
      )}
      <DropdownMenu right>
        <DropdownItem>Menu #1</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Menu #2</DropdownItem>
        <DropdownItem divider />
        {!user && (
          <DropdownItem>
            <NavLink className="nav-item nav-link navbar-right" to="/login">
              Login
            </NavLink>
          </DropdownItem>
        )}

        {user && (
          <DropdownItem>
            <NavLink className="nav-item nav-link navbar-right" to="/profile">
              profile
            </NavLink>
          </DropdownItem>
        )}
        {user && (
          <DropdownItem>
            <NavLink className="nav-item nav-link navbar-right" to="/logout">
              Sign out
            </NavLink>
          </DropdownItem>
        )}
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
