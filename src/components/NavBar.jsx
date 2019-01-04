import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-dark justify-content-between py-0 bg-info navbar-expand-lg py-md-0">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            J<FontAwesomeIcon icon="grin-alt" />Y
          </NavLink>
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
              {/* TODO:  Disable local login*/}
              {/* <NavLink
                className="nav-item nav-link navbar-right"
                to="/register"
              >
                Register
              </NavLink> */}
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
        <span>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
