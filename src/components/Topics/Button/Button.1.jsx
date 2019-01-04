import React, { Component } from 'react';
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
  // console.log({ name });
  // onClick={() => _onTopicSelect()}
  return (
    <BindedTopics name={name} onClick={_onTopicSelect(name)}>
      <Topics>
        <TopicsLogo image={logo} />
        <TopicsTitle className="topics-title">{name}</TopicsTitle>
      </Topics>
    </BindedTopics>
  );
};

const BindedTopics = ({ name }) => {
  // console.log(name);
};

const _onTopicSelect = ({ name }) => {
  console.log(name);
};

// class TopicsDetail extends Component {
//   render() {
//     // console.log(this.props);
//     return (
//       <Topics
//         name={this.props.name}
//         onClick={() => _onTopicSelect(this.props.name)}
//       >
//         <TopicsLogo image={this.props.logo} />
//         <TopicsTitle className="topics-title">{this.props.name}</TopicsTitle>
//       </Topics>
//     );
//   }
// }

// const _onTopicSelect = ({ name }) => {
//   console.log(name);
// };

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
