import React, { Component } from 'react';
// import http from '../../services/httpService';
// import auth from '../../services/authService';
// import querystring from 'query-string';

import CoursesTitle from './Title/Title';
import CoursesList from './List/List';
// import CoursesFilter from './CoursesFilter';

// import './Courses.css';
// import config from '../../config';
// const { SERVER_URL } = config();

class Courses extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <CoursesTitle title={this.state.title} />
        {this.state.courses.map((course, index) => {
          return (
            <CoursesList
              name={course.name}
              period={course.period}
              key={index}
            />
          );
        })}
        {/* <CoursesFilter /> */}
      </React.Fragment>
    );
  }
}

export default Courses;
