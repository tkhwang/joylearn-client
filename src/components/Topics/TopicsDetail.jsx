import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import Topic from '';

// import './TopicsDetail.css';

// es5? / es6?
// topics list (로그인 했을 때 홈 화면에서)
// const TopicsDetail = ({ name, logo }) => {
//   return (
//     <div className="topics">
//       <TopicsLogo image={logo} />
//       <h1 className="topics-title">{name}</h1>
//     </div>
//   );
// };

// function TopicsLogo({ image }) {
//   return <img className="logoimages" src={image} alt="Topic Logo" />;
// }

//-----

// styled components 적용!!
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
  width: 30%;
  display: flex;
  border: solid 1px;
  margin: 10px;
  &:hover {
    transform: translate3d(-3px, -3px, 100px);
    box-shadow: 5px 10px #888888;
  }
`;

const TopicsTitle = styled.h1`
  font-size: 30px;
`;

const Img = styled.img`
  max-width: 60px;
  max-height: 60px;
`;

export default TopicsDetail;
