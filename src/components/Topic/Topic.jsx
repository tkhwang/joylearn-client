import React, { Component } from 'react';
import styled from 'styled-components';
import http from '../../services/httpService';
import querystring from 'query-string';

import Title from './Title/Title';
import Instructors from './Instructors/Instructors';
import Lectures from './Lectures/Lectures';
import Courses from './Courses/Courses';

// import './Topic.css';
import config from '../../config';
const { SERVER_URL } = config();

// selected topic
class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: ''
    };
  }

  componentDidMount() {
    const values = querystring.parse(this.props.location.search);
    console.log('[+] Topic : values = ', values);
    this.setState({
      ...this.state,
      topic: values.topic
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.topic} @ Topic</h1>
      </React.Fragment>
    );
  }
}

const BestTopicInstructorsTitle = styled.h1`
  font-size: 1.3rem;
`;

const BestTopicInstructors = styled.div`
  display: flex;
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
`;

export default Topic;
