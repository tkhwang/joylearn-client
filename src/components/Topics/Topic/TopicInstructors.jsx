import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class TopicInstructors extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="topic-instructors">
        <InstructorImage />
      </div>
    );
  }
}

const InstructorImage = () => {};

InstructorImage.propTypes = {};

export default TopicInstructors;
