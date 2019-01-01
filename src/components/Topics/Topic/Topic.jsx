import React, { Component } from 'react';
import http from '../../../services/httpService';

import TopicTitle from './TopicTitle';
// import TopicInstructors from './TopicInstructors';
// import TopicLectures from './TopicLectures';
// import TopicCourses from './TopicCourses';

import config from '../../../config';
const { SERVER_URL } = config();

// selected topic
class Topic extends Component {
  state = {
    title: [
      {
        name: 'JavaScript',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      }
    ],
    instructor: [
      {
        name: 'nicolas',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcHqqV6R7odc2hUTo6Z7Tu4pInnkrugrviuguEKgoaVi4fS3mq'
      },
      {
        name: 'mosh',
        image: ''
      },
      {
        name: 'zerocho',
        image: ''
      },
      {
        name: 'velopert',
        image: ''
      },
      {
        name: 'kooilmo',
        image: ''
      },
      {
        name: 'leehoyong',
        image: ''
      }
    ],
    lecture: [
      {
        name: 'react',
        image: 'https://tryolabs.com/images/blog/social/react.736da783.png'
      },
      {
        name: 'JavaScript',
        image: ''
      },
      {
        name: 'node.js',
        image: ''
      },
      {
        name: '',
        image: ''
      }
    ],
    courese: [
      {
        name: 'tutorial',
        id: '1'
      }
    ]
  };

  // constructor(props){
  //   super(props);

  // }

  // async componentDidMount() {
  //   const topic = await http.get(SERVER_URL + '/topics:topicid');
  //   // console.log(topics);
  //   this.setState({
  //     topics: topics.data
  //   });
  // }

  render() {
    console.log(this.state.title);
    return (
      <React.Fragment>
        <TopicTitle title={this.state.title} />
        {/* <TopicInstructors instructors={this.state.instructors} />
        <TopicLectures lectures={this.state.lectures} />
        <TopicCourses courses={this.state.courses} /> */}
      </React.Fragment>
    );
  }
}

export default Topic;
