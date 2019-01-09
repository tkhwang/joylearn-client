import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';

import Course from './components/Course/Course';
// import Lecture from './components/Lecture/Lecture';
import Instructors from './components/Instructors/Instructors';
import Instructor from './components/Instructor/Instructor';
import Topics from './components/Topics/Topics';
import Topic from './components/Topic/Topic';
import Lectures from './components/Lectures/Lectures';
import Lecture from './components/Lecture/Lecture';
import Courses from './components/Courses/Courses';
import Setting from './components/Setting/Setting';
import NotFound from './components/notFound';
import NavBar from './components/NavBar/NavBar';
import LoginForm from './components/LoginForm/LoginForm';
import Logout from './components/Logout';
import ProtectedRoute from './components/common/ProtectedRoute';
import Movies from './components/Movies/Movies';
import Admin from './components/Admin/Admin';
import auth from './services/authService';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

library.add(faGrinAlt);

class App extends Component {
  state = {};

  componentDidMount = () => {
    console.log('[+] NODE_ENV =', process.env.REACT_APP_NODE_ENV);

    const user = auth.getCurrentUser();
    this.setState({
      user
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <main className="content">
          <Switch>
            {/* <Route path="/register" component={RegisterForm} /> */}
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/admin" exact component={Admin} />
            <ProtectedRoute path="/topics" component={Topics} />
            <ProtectedRoute path="/instructor" component={Instructor} />
            {/* <ProtectedRoute path="/lectures" component={Lecture} /> */}
            <ProtectedRoute path="/lecture" exact component={Lecture} />
            <ProtectedRoute path="/courses" component={Course} />
            <ProtectedRoute path="/setting" exact component={Setting} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/movies" component={Movies} />
            <Route path="/topics" component={Topics} />
            {/* <Route path="/j/:topicId" component={Topic} /> */}
            <Route path="/j/:topic" render={topic => <Topic topic={topic} />} />
            <Route path="/l/:topic" render={topic => <Lectures topic={topic} />} />
            <Route path="/i/:topic" render={topic => <Instructors topic={topic} />} />
            <Route path="/c/:topic" render={topic => <Courses topic={topic} />} />
            <Route path="/courses" exact component={Courses} />
            {/* <Route path="/" exact component={Topic} /> */}
            <Route path="/" exact component={Topics} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
