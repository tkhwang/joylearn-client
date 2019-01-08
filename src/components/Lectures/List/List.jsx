import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// import './LecturesList.css';

// className을 바꿔줘야 되나?
class LecturesList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="lecture">
        <LectureScreenshot image={this.props.screenshot} />
        <h3>{this.props.title}</h3>
        <h1>{this.props.name}</h1>
        <h3>{this.props.instructor}</h3>
        <a>{this.props.url}</a>
        {/* <br /> */}
        <Free free={this.props.free} />
      </div>
    );
  }
}

// 코드의 재사용을 어떻게?
const LectureScreenshot = ({ image }) => {
  return <img className="lectureimage" src={image} alt="Lecture" />;
};

const Free = ({ free }) => {
  return free === true ? <h5>free</h5> : <h5>paid</h5>;
};

LectureScreenshot.propTypes = {
  image: PropTypes.string.isRequired
};

Free.proptypes = {
  free: PropTypes.bool.isRequired
};

export default LecturesList;
