import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// import './LecturesTitle.css';

// array로 받을 때 / if object로 받을 때 코드 수정 필요
class LecturesTitle extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="lectures">
        <LecturesLogo image={this.props.title.logo} />
        <h1 className="lectures-title">{this.props.title.name}</h1>
        <h3 className="lectures-content">{`${
          this.props.title.name
        } Tutorials and Courses`}</h3>
      </div>
    );
  }
}

const LecturesLogo = ({ image }) => {
  return <img className="lectures-logoimage" src={image} alt="Topic Logo" />;
};

LecturesLogo.propTypes = {
  image: PropTypes.string.isRequired
};

export default LecturesTitle;
