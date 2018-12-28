import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';

import Course from './components/Course/Course';
import Lecture from './components/Lecture/Lecture';
import Instructor from './components/Instructor/Instructor';
import NotFound from './components/notFound';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/LoginForm/RegisterForm';
import Logout from './components/Logout';
import ProtectedRoute from './components/common/ProtectedRoute';
import auth from './services/authService';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

library.add(faGrinAlt);

class App extends Component {
  state = {};

  componentDidMount = () => {
    const user = auth.getCurrentUser();
    this.setState({ user });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <main className="content">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/instructors" component={Instructor} />
            <ProtectedRoute path="/lectures" component={Lecture} />
            <ProtectedRoute path="/courses" component={Course} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/instructors" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
