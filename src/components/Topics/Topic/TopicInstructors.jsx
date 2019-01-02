import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import './TopicInstructors.css';

class TopicInstructors extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="topic-instructors">
        <InsImage image={this.props.image} />
        <h1 className="topic-instructors-name">{this.props.name}</h1>
        <hr />
        <p>{this.props.git}</p>
        <p>{this.props.url}</p>
        <a class="btn">Read More </a>
        <div class="space" />
      </div>
    );
  }
}

const InsImage = ({ image }) => {
  return <img className="ins-image" src={image} alt="instructor image" />;
};

InsImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default TopicInstructors;
