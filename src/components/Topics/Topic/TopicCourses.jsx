import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// 추천수도 보여줄 필요가 있어 보임 (스키마가 바뀔 필요가 있어 보임)
const TopicCourses = ({ name, period }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h5>{period}</h5>
    </div>
  );
};

TopicCourses.propTypes = {
  name: PropTypes.string.isRequired,
  period: PropTypes.number.isRequired
};

export default TopicCourses;
