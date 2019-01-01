import React, { Component } from 'react';

import CourseTitle from './CourseTitle';
import CourseMain from './CourseMain';
import CourseComments from './CourseComments';

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
