import React, { Component } from 'react';
import styled from 'styled-components';
import http from '../../../services/httpService';

import TopicTitle from './TopicTitle';
import TopicInstructors from './TopicInstructors';
import TopicLectures from './TopicLectures';
import TopicCourses from './TopicCourses';

// import './Topic.css';
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
      },
      {
        name: 'TylerMcGinnis',
        github: 'https://github.com/tylermcginnis',
        mainurl: 'https://tylermcginnis.com/',
        image: 'https://avatars1.githubusercontent.com/u/2933430?s=460&v=4'
      },
      {
        name: 'zerocho',
        github: 'https://github.com/ZeroCho',
        mainurl: 'https://www.zerocho.com/',
        image:
          'data:image/png;base64,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'
      },
      {
        name: 'velopert',
        github: 'https://github.com/velopert',
        mainurl: 'https://velopert.com/',
        image:
          'https://trello-avatars.s3.amazonaws.com/b3bd414d2fbf3e8d43a4b45f4d596316/170.png'
      }
    ],
    lectures: [
      {
        title: 'JavaScript',
        url: 'https://academy.nomadcoders.co/courses/enrolled/435558',
        name: 'JavaScript for beginer',
        screenshot:
          'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/ySY5plO8Tay6VFtYnfD9',
        free: true,
        instructor: 'nicolas'
      },
      {
        title: 'JavaScript',
        url: 'https://codewithmosh.com/courses/enrolled/324741',
        name: 'JavaScript Basics for Beginners',
        screenshot:
          'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/4JkBtVU9QUwcwFCWi3AV',
        free: true,
        instructor: 'mosh'
      },
      {
        title: 'JavaScript',
        url: 'https://wesbos.com/courses/',
        name: 'JavaScript',
        screenshot:
          'https://steemitimages.com/DQmP18L6k8EMHNfsvRNaRFWvka2GnRo8b8CpDuM3hbYGnqp/ff3ywn-1-800x533.jpg',
        free: true,
        instructor: 'WesBos'
      },
      {
        title: 'JavaScript',
        url: 'https://tylermcginnis.com/',
        name: 'Modern JavaScript',
        screenshot:
          'http://www.ddaily.co.kr/data/photos/20150313/art_1427325311.jpg',
        free: true,
        instructor: 'TylerMcGinnis'
      },
      {
        title: 'JavaScript',
        url: 'www.zerocho.com',
        name: 'JavaScript 교과서',
        screenshot:
          'https://mygaming.co.za/news/wp-content/uploads/2016/12/Code.jpg',
        free: true,
        instructor: 'zerocho'
      },
      {
        title: 'JavaScript',
        url: 'velopert.com',
        name: 'tutorials.log',
        screenshot:
          'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg',
        free: true,
        instructor: 'velopert'
      }
    ],
    courses: [
      {
        name: '초심자를 위한 자바스크립트',
        period: 3
      },
      {
        name: '이것만 따라하면 자바스크립트 완전 정복',
        period: 4
      },
      {
        name: '뉴비 코더들을 위한 자바스크립트',
        period: 2
      },
      {
        name: '자바스크립트 고수되기',
        period: 3
      },
      {
        name: '자바스크립트의 왕도',
        period: 5
      },
      {
        name: '초보를 위한 자바스크립트',
        period: 2
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
    return (
      <React.Fragment>
        <TopicTitle title={this.state.title} />
        <hr />
        <h1>Best Instructors</h1>
        {this.state.instructors.map((instructor, index) => {
          return (
            <BestTopicInstructors>
              <TopicInstructors
                name={instructor.name}
                git={instructor.github}
                url={instructor.mainurl}
                image={instructor.image}
                key={index}
              />
            </BestTopicInstructors>
          );
        })}
        {/* <TopicInstructors instructors={this.state.instructors} /> */}
        <a href="">more</a>
        {this.state.lectures.map((lecture, index) => {
          return (
            <TopicLectures
              title={lecture.title}
              url={lecture.url}
              name={lecture.name}
              screenshot={lecture.screenshot}
              free={lecture.free}
              instructor={lecture.instructor}
              key={index}
            />
          );
        })}
        {/* <TopicLectures lectures={this.state.lectures} /> */}
        <a href="">more</a>
        {this.state.courses.map((course, index) => {
          return (
            <TopicCourses
              name={course.name}
              period={course.period}
              key={index}
            />
          );
        })}
        {/* <TopicCourses courses={this.state.courses} /> */}
        <a href="">more</a>
      </React.Fragment>
    );
  }
}

const BestTopicInstructors = styled.div`
  display: flex;
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
`;

export default Topic;
