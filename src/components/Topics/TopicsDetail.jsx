import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import Topic from '';

import './TopicsDetail.css';

// es5? / es6?
// topics list (로그인 했을 때 홈 화면에서)
const TopicsDetail = ({ name, logo }) => {
  return (
    <div className="topics">
      <TopicsLogo image={logo} />
      <h1 className="topics-title">{name}</h1>
    </div>
  );
};

function TopicsLogo({ image }) {
  return <img className="logoimages" src={image} alt="Topic Logo" />;
}

TopicsDetail.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

TopicsLogo.propTypes = {
  image: PropTypes.string.isRequired
};

export default TopicsDetail;
