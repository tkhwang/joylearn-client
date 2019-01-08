import React, { Component } from 'react';

import CourseTitle from './Title/Title';
import CourseMain from './Main/Main';
import CourseComments from './Comments/Comments';

class Course extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <CourseTitle />
        <CourseMain />
        <CourseComments />
      </React.Fragment>
    );
  }
}

export default Course;
