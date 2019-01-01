import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// className(topic / topic-title) 수정할 수도 있음
const TopicTitle = ({ name, logo }) => {
  return (
    <div className="topic">
      <TopicLogo image={logo} />
      <h1 className="topic-title">{name}</h1>
    </div>
  );
};

// alt => Topic Logo로 수정할수도 있음
const TopicLogo = ({ image }) => {
  return <img className="logoimage" src={image} alt="Selected Topic Logo" />;
};

TopicTitle.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

TopicLogo.propTypes = {
  image: PropTypes.string.isRequired
};

export default TopicTitle;
