import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import Topic from '';

const TopicsDetail = ({ name, logo }) => {
  return (
    <Topics>
      <TopicsLogo image={logo} />
      <TopicsTitle className="topics-title">{name}</TopicsTitle>
    </Topics>
  );
};

function TopicsLogo({ image }) {
  return <Img className="logoimages" src={image} alt="Topic Logo" />;
}

TopicsDetail.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

TopicsLogo.propTypes = {
  image: PropTypes.string.isRequired
};

const Topics = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  border: solid 1px gray;
  margin: 10px;
  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 3px 5px #ced6e0;
  }
`;

const TopicsTitle = styled.h1`
  font-size: 1.3rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;

const Img = styled.img`
  max-width: 2.7rem;
  max-height: 2.7rem;
  margin: 3px;
`;

export default TopicsDetail;
