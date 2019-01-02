import React, { Component } from 'react';
import http from '../../services/httpService';
import auth from '../../services/authService';
import querystring from 'query-string';

import LecturesTitle from './LecturesTitle';
import LecturesList from './LecturesList';
// import LecturesFilter from './LecturesFilter';

import './Lectures.css';
import config from '../../config';
const { SERVER_URL } = config();

// title이 array로 올지 object로 올지
class Lectures extends Component {
  state = {
    title: {
      name: 'JavaScript',
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
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
        <LecturesTitle title={this.state.title} />
        <hr />
        {this.state.lectures.map((lecture, index) => {
          return (
            <LecturesList
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
        {/* <LecturesFilter /> */}
      </React.Fragment>
    );
  }
}

export default Lectures;
