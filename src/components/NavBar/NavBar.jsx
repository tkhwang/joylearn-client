import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserButton from './UserButton';

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
          {/* <NavbarBrand href="/">
            J<FontAwesomeIcon icon="grin-alt" />Y
          </NavbarBrand> */}
          <NavLink className="nav-item nav-link" to="/">
            J<FontAwesomeIcon icon="grin-alt" />Y
          </NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
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
                <UserButton user={user} />
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
