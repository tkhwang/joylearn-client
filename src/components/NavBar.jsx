import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-dark py-0 bg-info navbar-expand-lg py-md-0">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
      <Link className="navbar-brand" to="/">
        J<FontAwesomeIcon icon="grin-alt" />Y
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {/* <NavLink className="nav-item nav-link active" to="/instructor">
            Instructors <span className="sr-only">(current)</span>
          </NavLink> */}
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
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link navbar-right" to="/login">
                Login
              </NavLink>
              <NavLink
                className="nav-item nav-link navbar-right"
                to="/register"
              >
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link navbar-right" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link navbar-right" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
