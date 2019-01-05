import React, { Component } from 'react';
import styled from 'styled-components';
import http from '../../services/httpService';
import querystring from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActions from '../../actions/signin';
import * as topicsActiosn from '../../actions/topics';

import Title from './Title/Title';
import Instructors from './Instructors/Instructors';
// import Lectures from './Lectures/Lectures';
// import Courses from './Courses/Courses';

// import './Topic.css';
import config from '../../config';
const { SERVER_URL } = config();

// selected topic
class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: {},
      instructors: []
    };
  }

  async componentDidMount() {
    console.log('[+] Topic = (redux) ', this.props);

    const { topic } = querystring.parse(this.props.location.search);
    console.log('[+] Topic : values = ', topic);

    this.setState({
      ...this.state,
      topic: topic
    });

    const { topics } = this.props.topics;
    console.log(`[+] Topic : topics = ${topics}, topic = ${topic}`);
    // console.log(topics.name[topic]);

    const selectedTopic = topics.filter(obj => {
      return obj.name === topic;
    })[0];
    console.log('[+] selectedTopic = ', selectedTopic);
    this.setState({ ...this.state, topic: selectedTopic });

    const { data: instructors } = await http.get(SERVER_URL + '/instructors');
    console.log(instructors);

    this.setState({
      ...this.state,
      instructors: instructors
    });
  }

  render() {
    const { isSignin } = this.props.signin;

    return (
      <React.Fragment>
        <Title title={this.state.topic} />
        <hr />
        <CardsContatiner>
          {this.state.instructors.map(instructor => {
            return (
              <BestTopicInstructors>
                <Instructors
                  name={instructor.name}
                  git={instructor.git}
                  url={instructor.mainurl}
                  image={instructor.image}
                  key={instructor.name}
                />
              </BestTopicInstructors>
            );
          })}
        </CardsContatiner>
      </React.Fragment>
    );
  }
}

// <React.Fragment>
//   <Title title={this.state.title} />
//   <hr />
//   <BestTopicInstructorsTitle>Best Instructors</BestTopicInstructorsTitle>
//   {this.state.instructors.map((instructor, index) => {
//     return (
//       <BestTopicInstructors>
//         <Instructors
//           name={instructor.name}
//           git={instructor.github}
//           url={instructor.mainurl}
//           image={instructor.image}
//           key={index}
//         />
//       </BestTopicInstructors>
//     );
//   })}
//   <a href="">more</a>
//   {this.state.lectures.map((lecture, index) => {
//     return (
//       <Lectures
//         title={lecture.title}
//         url={lecture.url}
//         name={lecture.name}
//         screenshot={lecture.screenshot}
//         free={lecture.free}
//         instructor={lecture.instructor}
//         key={index}
//       />
//     );
//   })}
//   <a href="">more</a>
//   {this.state.courses.map((course, index) => {
//     return (
//       <Courses name={course.name} period={course.period} key={index} />
//     );
//   })}
//   <a href="">more</a>
//   <h1>{this.state.topic} @ Topic</h1>
// </React.Fragment>

const BestTopicInstructorsTitle = styled.h1`
  font-size: 1.3rem;
`;

const CardsContatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const BestTopicInstructors = styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 10px;
`;

export default connect(
  state => ({
    // TODO: How store state is linked to this ?
    signin: state.signin,
    topics: state.topics
  }),
  dispatch => ({
    signinActions: bindActionCreators(signinActions, dispatch),
    topicsActiosn: bindActionCreators(topicsActiosn, dispatch)
  })
)(Topic);
