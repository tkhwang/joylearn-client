import React, { Component } from 'react';
import styled from 'styled-components';
import http from '../../services/httpService';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import * as signinActions from '../../actions/signin';
import * as topicsActiosn from '../../actions/topics';

import Title from './Title/Title';
import Instructors from './Instructors/Instructors';
import Lectures from './Lectures/Lectures';
// import Courses from './Courses/Courses';

import config from '../../config';
const { SERVER_URL } = config();

// selected topic
class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: {},
      instructors: [],
      lectures: [],
      courses: []
    };
  }

  async componentDidMount() {
    const { topic } = this.props.topic.match.params;

    this.setState({
      ...this.state,
      topic: topic
    });

    const { topics } = this.props.storeTopics;

    const selectedTopic = topics.filter(obj => {
      return obj.name === topic;
    })[0];
    this.setState({ ...this.state, topic: selectedTopic });

    const { data } = await http.get(`${SERVER_URL}/t/${topic}`);

    this.setState({
      ...this.state,
      instructors: data.instructors,
      lectures: data.lectures
    });
  }

  _renderTopic = () => {
    return (
      <React.Fragment>
        <CardsContatiner>
          {this.state.instructors.map(instructor => {
            return (
              <BestTopicInstructors>
                <Instructors
                  name={instructor.name}
                  git={instructor.gitHub}
                  url={instructor.mainUrl}
                  image={instructor.image}
                  key={instructor.name}
                />
              </BestTopicInstructors>
            );
          })}
        </CardsContatiner>
        <CardsContatiner>
          {this.state.lectures.map(lecture => {
            return (
              <Lectures
                name={lecture.name}
                // instructor={lecture.instructor}
                image={lecture.screenshot}
                url={lecture.url}
                lang={lecture.lang}
                free={lecture.free}
              />
            );
          })}
        </CardsContatiner>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Title title={this.state.topic} />

        <hr />

        {this.state.instructors && this.state.lectures ? (
          this._renderTopic()
        ) : (
          <DivSpinner>
            <Loader type="Triangle" color="#00BFFF" height="200" width="200" />
          </DivSpinner>
        )}
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

//----

// const BestTopicInstructorsTitle = styled.h1`
//   font-size: 1.3rem;
// `;

const CardsContatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 30px 30px 30px 30px;
`;
// flex-direction: row

const BestTopicInstructors = styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 10px;
`;

const DivSpinner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
`;

export default connect(
  state => ({
    storeSignin: state.signin,
    storeTopics: state.topics
  }),
  dispatch => ({
    actionsSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActiosn, dispatch)
  })
)(Topic);
