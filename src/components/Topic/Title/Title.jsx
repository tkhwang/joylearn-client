import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import './Title.css';

class Title extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="topic">
        <TopicLogo image={this.props.title[0].logo} />
        <h1 className="topic-title">{this.props.title[0].name}</h1>
        <h3 className="topic-content">{`${
          this.props.title[0].name
        } Tutorials and Courses`}</h3>
      </div>
    );
  }
}

const TopicLogo = ({ image }) => {
  return <img className="logoimage" src={image} alt="Selected Topic Logo" />;
};

TopicLogo.propTypes = {
  image: PropTypes.string.isRequired
};

export default Title;