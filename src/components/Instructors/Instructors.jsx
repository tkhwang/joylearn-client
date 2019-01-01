import React, { Component } from 'react';
import http from '../../services/httpService';
import auth from '../../services/authService';
import querystring from 'query-string';

import InstructorsTitle from './InstructorsTitle';
import InstructorsList from './InstructorsList';
import InstructorsFilter from './InstructorsFilter';

import './Instructors.css';
import config from '../../config';
const { SERVER_URL } = config();

class Instructors extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <InstructorsTitle />
        <InstructorsList />
        <InstructorsFilter />
      </React.Fragment>
    );
  }
}

export default Instructors;
