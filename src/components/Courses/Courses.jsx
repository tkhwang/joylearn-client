import React, { Component } from 'react';
import http from '../../services/httpService';
import auth from '../../services/authService';
import querystring from 'query-string';

import CoursesTitle from './CoursesTitle';
import CoursesList from './CoursesList';
// import CoursesFilter from './CoursesFilter';

import './Courses.css';
import config from '../../config';
const { SERVER_URL } = config();

class Courses extends Component {
  state = {
    title: {
      name: 'JavaScript',
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
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

  render() {
    console.log(this.state.courses);
    return (
      <React.Fragment>
        <CoursesTitle title={this.state.title} />
        {this.state.courses.map((course, index) => {
          return (
            <CoursesList
              name={course.name}
              period={course.period}
              key={index}
            />
          );
        })}
        {/* <CoursesFilter /> */}
      </React.Fragment>
    );
  }
}

export default Courses;
