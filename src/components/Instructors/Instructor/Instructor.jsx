import React, { Component } from 'react';

import InstructorProfile from './InstructorProfile';
import InstructorHex from './InstructorHex';
import InstructorJit from './InstructorJit';
import InstructorLec from './InstructorLec';
import InstructorComments from './InstructorComments';

// InstructorTitle 추가될 수 있음
// InstructorReview 추가될 수 있음
class Instructor extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <InstructorProfile />
        <InstructorHex />
        <InstructorJit />
        <InstructorLec />
        <InstructorComments />
      </React.Fragment>
    );
  }
}

export default Instructor;
