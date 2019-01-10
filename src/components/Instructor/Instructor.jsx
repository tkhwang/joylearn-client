import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import http from '../../services/httpService';

// import Profile from './Profile/Profile';
// import Hex from './Hex/Hex';
// import Jit from './Jit/Jit';
// import Lec from './Lec/Lec';
// import Comments from './Comments/Comments';

import InstructorCard from '../Instructor/Card/Card';
import InstructorCardMk2 from '../Instructor/Card/CardMk2';

import config from '../../config';
const { SERVER_URL } = config();

// InstructorTitle 추가될 수 있음
// InstructorReview 추가될 수 있음
class Instructor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instructor: {},
      lectures: []
    };
  }

  static proptypes = {};

  async componentDidMount() {
    const { name } = this.props.name.match.params;
    const { data } = await http.get(`${SERVER_URL}/instructor/${name}`);

    this.setState({
      ...this.state,
      instructor: data.instructor[0],
      lectures: data.lectures
    });
  }

  _renderPage = () => {};

  render() {
    console.log('이건 강사 페이지의 스테이트', this.state);
    console.log('이건 강사 페이지의 프롭스', this.props);
    return (
      <React.Fragment>
        <InstructorCard
          name={this.state.instructor.name}
          image={this.state.instructor.image}
          github={this.state.instructor.gitHub}
          // url={this.state.instructor.mainUrl}
        />
        <h1>Lecture</h1>
        {this.state.lectures.map(lecture => {
          return <InstructorCardMk2 name={lecture.name} url={lecture.url} />;
        })}

        {/* <InstructorProfile />
        <InstructorHex />
        <InstructorJit />
        <InstructorLec />
        <InstructorComments /> */}
      </React.Fragment>
    );
  }
}

export default Instructor;
