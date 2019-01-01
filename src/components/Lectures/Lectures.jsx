import React, { Component } from 'react';
import http from '../../services/httpService';
import auth from '../../services/authService';
import querystring from 'query-string';

import LecturesTitle from './LecturesTitle';
import LecturesList from './LecturesList';
import LecturesFilter from './LecturesFilter';

import './Lectures.css';
import config from '../../config';
const { SERVER_URL } = config();

class Lectures extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <LecturesTitle />
        <LecturesList />
        <LecturesFilter />
      </React.Fragment>
    );
  }
}

export default Lectures;
