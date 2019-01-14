import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown
} from 'reactstrap';
import { FaGrin } from 'react-icons/fa';

import UserButton from './UserButton';

import auth from '../../services/authService';
import * as signinActions from '../../actions/signin';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user: ''
    };
  }

  componentDidMount() {
    const { actionsSign } = this.props;
    const user = auth.getCurrentUser();

    this.setState(
      {
        ...this.state,
        user: user
      },
      () => {
        actionsSign.signin(user);
      }
    );
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Navbar color="info" light expand="md">
          {/* <NavbarBrand href="/">
            J<FontAwesomeIcon icon="grin-alt" />Y
          </NavbarBrand> */}
          <NavLink className="nav-item nav-link" to="/">
            J<FaGrin />Y
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

// export default NavBar;
export default connect(
  state => ({
    storeSignin: state.signin
  }),
  dispatch => ({
    actionsSign: bindActionCreators(signinActions, dispatch)
  })
)(NavBar);
