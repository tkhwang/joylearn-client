import React, { Component } from 'react';

import LectureTitle from './LectureTitle';
import LectureProfile from './LectureProfile';
import LectureBar from './LectureBar';
import LectureComments from './LectureComments';

class Lecture extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <LectureTitle />
        <LectureProfile />
        <LectureBar />
        <LectureComments />
      </React.Fragment>
    );
  }
}

export default Lecture;
