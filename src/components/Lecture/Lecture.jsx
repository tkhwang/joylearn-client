import React, { Component } from 'react';
// import http from '../../services/httpService';

import LectureTitle from './Title/Title';
// import LectureProfile from './LectureProfile';
// import LectureBar from './LectureBar';
// import LectureComments from './LectureComments';

// import './Lecture.css';
// import config from '../../config';
// const { SERVER_URL } = config();

class Lecture extends Component {
  state = {
    title: {
      name: 'JavaScript',
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    }
  };

  render() {
    return (
      <React.Fragment>
        <LectureTitle title={this.state.title} />
        {/* <LectureProfile />
        <LectureBar />
        <LectureComments /> */}
      </React.Fragment>
    );
  }
}

export default Lecture;
