import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import CardInstructor from '../../common/Card/CardInstructor';

class TopicLectures extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    free: PropTypes.bool.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <CardInstructor
          image={this.props.image}
          title={this.props.name}
          description={this.props.url}
        />
      </React.Fragment>

      // <div className="lecture">
      //   <LectureScreenshot image={this.props.screenshot} />
      //   <h3>{this.props.title}</h3>
      //   <h1>{this.props.name}</h1>
      //   <h3>{this.props.instructor}</h3>
      //   <a>{this.props.url}</a>
      // </div>
    );
  }
}

const LectureScreenshot = ({ image }) => {
  return <img className="lectureimage" src={image} alt="Lecture" />;
};

const Free = ({ free }) => {
  return free === true ? <h5>Free</h5> : <h5>Paid</h5>;
};

LectureScreenshot.propTypes = {
  image: PropTypes.string.isRequired
};

Free.proptypes = {
  free: PropTypes.bool.isRequired
};

export default TopicLectures;
