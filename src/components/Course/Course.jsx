import React, { Component } from 'react';

import Title from '../common/Title/Title';
import Main from './Main/Main';
import Comments from './Comments/Comments';

class Course extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Title />
        <Main />
        <Comments />
      </React.Fragment>
    );
  }
}

export default Course;
