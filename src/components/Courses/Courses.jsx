import React, { Component } from 'react';
import http from '../../services/httpService';
import auth from '../../services/authService';
import querystring from 'query-string';

import CoursesTitle from './CoursesTitle';
import CoursesList from './CoursesList';
import CoursesFilter from './CoursesFilter';

import './Courses.css';
import config from '../../config';
const { SERVER_URL } = config();

class Courses extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <CoursesTitle />
        <CoursesList />
        <CoursesFilter />
      </React.Fragment>
    );
  }
}

export default Courses;
