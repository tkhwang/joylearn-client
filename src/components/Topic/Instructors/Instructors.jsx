import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import TopicInstructorsCard from '../../Topic/Instructors/Card/Card';

class Instructors extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    FullName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };

  // render() {
  //   return (
  //     <div className="topic-instructors">
  //       <InsImage image={this.props.image} />
  //       <h1 className="topic-instructors-name">{this.props.name}</h1>
  //       <hr />
  //       <p>{this.props.git}</p>
  //       <p>{this.props.url}</p>
  //       <a class="btn">Read More </a>
  //       <div className="space" />
  //     </div>
  //   );
  // }

  render() {
    // console.log('확인 필요', this.props);
    // fullName / git / url
    return (
      <React.Fragment>
        <TopicInstructorsCard
          image={this.props.image}
          title={!this.props.FullName ? this.props.name : this.props.FullName}
          description={this.props.url}
        />
      </React.Fragment>
    );
  }
}

const InsImage = ({ image }) => {
  return <img className="ins-image" src={image} alt="instructor" />;
};

InsImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default Instructors;
