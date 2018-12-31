import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import Topic from '';

import './TopicsDetail.css';

// topics list (로그인 했을 때 홈 화면에서)
// class TopicsDetail extends Component {
//   constructor(props){
//     super(props);
    
//     this.state={
//       topics: [],
//     };
//   }

//   _callApi = () => {

//   }

//   componentDidMount(){

//   }

//   // import PropTypes from 'prop-types';
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string,
//   }

//   render(){
//     // img / topicName
//     return(
//       <React.Fragment>
//         {this.state.topics.map((topic, index) => {
//           // return (
//           //   <Link to='/topics:topics.id'> {/* 아직 미정 */}
//           //     <Topic topic={topic} key={index}/>
//           //   </Link>
//           // );
//         })}
//       </React.Fragment>
//     );
//   }
// }

// image도 객체로?
// class TopicsImage extends Component {

// }


// es5? / es6?
const TopicsDetail = ({name, logo}) => {
  return (
    <div className="topic">
      <TopicsLogo image={logo} />
      <h1 className="topic-title">{name}</h1>
    </div>
  )
}

function TopicsLogo({image}) { // {poster}도 주의
  return (
    <img className="logoimage" src={image} alt="Topic Logo" />
  )
}

TopicsDetail.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
}

TopicsLogo.propTypes = {
  image: PropTypes.string.isRequired,
}

export default TopicsDetail;
