import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// import { Link } from 'react-router-dom';

import './Instructors.css';

class Instructors extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
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
    return (
      <InstructorCard>
        <CardContents>
          <InsImage image={this.props.image} />
          <h1 className="topic-instructors-name">{this.props.name}</h1>
          <hr />
          <p>{this.props.git}</p>
          <p>{this.props.url}</p>
          <a class="btn">Read More</a>
          <div className="space" />
        </CardContents>
      </InstructorCard>
    );
  }
}

const InsImage = ({ image }) => {
  return <img className="ins-image" src={image} alt="instructor image" />;
};

InsImage.propTypes = {
  image: PropTypes.string.isRequired
};

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0, 1px, 3px, rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const InstructorCard = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30rem;
  width: 100%;
  ${awesomeCard}
  background-color: #ecf0f1;
  &:hover {
    box-shadow: 0 18px 35px rgba(50, 50, 90, 0.1),
      0 8px 15px rgba(0, 0, 0, 0.07);
    transform: translateY(-1px);
  }
`;

const CardContents = styled.div`
  text-align: center;
`;

export default Instructors;
