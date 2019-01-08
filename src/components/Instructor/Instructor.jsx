import React, { Component } from 'react';

import InstructorProfile from './Profile/Profile';
import InstructorHex from './Hex/Hex';
import InstructorJit from './Jit/Jit';
import InstructorLec from './Lec/Lec';
import InstructorComments from './Comments/Comments';

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
