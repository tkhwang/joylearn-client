import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  // NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        <Navbar color="info" light expand="md">
          <NavbarBrand href="/">
            J<FontAwesomeIcon icon="grin-alt" />Y
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLink className="nav-item nav-link" to="/topic">
                Topic
              </NavLink>
              <NavLink className="nav-item nav-link" to="/movies">
                (study) Movies
              </NavLink>
              <NavLink className="nav-item nav-link" to="/instructors">
                Instructors
              </NavLink>
              <NavLink className="nav-item nav-link" to="/lectures">
                Lectures
              </NavLink>
              <NavLink className="nav-item nav-link" to="/courses">
                Courses
              </NavLink>
              <UncontrolledDropdown nav inNavbar>
                {!user && (
                  <DropdownToggle nav caret>
                    Login/Signup
                  </DropdownToggle>
                )}
                {user && (
                  <DropdownToggle nav caret>
                    {user.name}
                  </DropdownToggle>
                )}
                <DropdownMenu right>
                  {!user && (
                    <DropdownItem>
                      <NavLink
                        className="nav-item nav-link navbar-right"
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </DropdownItem>
                  )}

                  {user && (
                    <DropdownItem>
                      <NavLink
                        className="nav-item nav-link navbar-right"
                        to="/profile"
                      >
                        profile
                      </NavLink>
                    </DropdownItem>
                  )}
                  {user && (
                    <DropdownItem>
                      <NavLink
                        className="nav-item nav-link navbar-right"
                        to="/logout"
                      >
                        Logout
                      </NavLink>
                    </DropdownItem>
                  )}
                  <DropdownItem divider />
                  <DropdownItem>Later...</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
