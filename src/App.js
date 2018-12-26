import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Course from './components/Course/Course';
import Lecture from './components/Lecture/Lecture';
import Instructor from './components/Instructor/Instructor';
import NotFound from './components/notFound';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/LoginForm/RegisterForm';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(faGrinAlt);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="content">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/instructors" component={Instructor} />
            <Route path="/lectures" component={Lecture} />
            <Route path="/courses" component={Course} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
