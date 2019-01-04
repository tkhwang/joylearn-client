import React, { Component } from 'react';
import styled from 'styled-components';
import http from '../../services/httpService';
import querystring from 'query-string';

import Title from './Title/Title';
import Instructors from './Instructors/Instructors';
// import Lectures from './Lectures/Lectures';
// import Courses from './Courses/Courses';

// import './Topic.css';
import config from '../../config';
const { SERVER_URL } = config();

// selected topic
class Topic extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     topic: ''
  //   };
  // }

  state = {
    topic: {
      name: 'JavaScript',
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
    instructors: [
      {
        name: 'nicolas',
        github: 'https://github.com/serranoarevalo',
        mainurl: 'https://academy.nomadcoders.co/',
        image: 'https://www.filepicker.io/api/file/Hfn2brfS1jwMefqbZrOQ'
      },
      {
        name: 'mosh',
        github: 'https://github.com/mosh-hamedani',
        mainurl: 'https://codewithmosh.com/',
        image:
          'https://programmingwithmosh.com/wp-content/uploads/2017/06/mosh-300px.png'
      },
      {
        name: 'WesBos',
        github: 'https://github.com/wesbos',
        mainurl: 'https://wesbos.com/',
        image: 'https://avatars2.githubusercontent.com/u/176013?s=460&v=4'
      }
    ]
  };

  componentDidMount() {
    // const values = querystring.parse(this.props.location.search);
    // console.log('[+] Topic : values = ', values);
    // this.setState({
    //   ...this.state,
    //   topic: values.topic
    // });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.topic.name} @ Topic</h1>
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

// render() {
//   return (
//     <React.Fragment>
//       <Title title={this.state.title} />
//       <hr />
//       <BestTopicInstructorsTitle>Best Instructors</BestTopicInstructorsTitle>
//       {this.state.instructors.map((instructor, index) => {
//         return (
//           <BestTopicInstructors>
//             <Instructors
//               name={instructor.name}
//               git={instructor.github}
//               url={instructor.mainurl}
//               image={instructor.image}
//               key={index}
//             />
//           </BestTopicInstructors>
//         );
//       })}
//       <a href="">more</a>
//       {this.state.lectures.map((lecture, index) => {
//         return (
//           <Lectures
//             title={lecture.title}
//             url={lecture.url}
//             name={lecture.name}
//             screenshot={lecture.screenshot}
//             free={lecture.free}
//             instructor={lecture.instructor}
//             key={index}
//           />
//         );
//       })}
//       <a href="">more</a>
//       {this.state.courses.map((course, index) => {
//         return (
//           <Courses name={course.name} period={course.period} key={index} />
//         );
//       })}
//       <a href="">more</a>
//       <h1>{this.state.topic} @ Topic</h1>
//     </React.Fragment>
//   );
// }

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

export default Topic;
