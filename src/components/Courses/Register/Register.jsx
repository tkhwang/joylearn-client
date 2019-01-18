import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

import CommonSearchList from '../../common/SearchList/SearchList.jsx';
import IntegrationAutosuggest from '../IntegrationAutosuggest/IntegrationAutosuggest.jsx';
import CourseComment from '../../Courses/Comment/Comment.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActions from '../../../actions/signin';
import * as topicsActions from '../../../actions/topics';
import * as instructorActions from '../../../actions/instructor';
import * as bookActions from '../../../actions/book';
import * as lectureActions from '../../../actions/lecture';
import * as lecturesActions from '../../../actions/lectures';
import * as courseActions from '../../../actions/course';

import http, { SERVER_URL } from '../../../services/httpService.js';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueTitle: '',
      topic: '',
      courseUnit: 0
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  componentDidMount() {
    const { storeTopics, storeLecture } = this.props;

    console.log('[+] //////// storeTopics = ', storeTopics);
    console.log('[+] //////// storeLecture = ', storeLecture);
  }

  handleChangeTitle(event) {
    this.setState({ valueTitle: event.target.value });
  }

  render() {
    const { topics } = this.props.storeTopics;
    const { lectures } = this.props.storeCourse.data;
    const { books } = this.props.storeCourse.data;
    console.log('[+] //////// ', lectures, books);
    return (
      <React.Fragment>
        <CommonSearchList
          type="topic"
          title="Topic"
          arrays={topics}
          courseUnit={this.courseUnit}
        />
        <CommonSearchList
          type="lecture"
          title="Lecture"
          arrays={lectures}
          courseUnit={this.courseUnit}
        />
        <CommonSearchList
          type="book"
          title="Book"
          arrays={books}
          courseUnit={this.courseUnit}
        />
        <CourseComment type="instructor" name="" user="" comments="" />
      </React.Fragment>
    );
  }
}

// export default Register;
export default connect(
  state => ({
    storeSignin: state.signin,
    storeTopics: state.topics,
    storeInstructor: state.instructor,
    storeBook: state.book,
    storeLecture: state.lecture,
    storeLectures: state.lectures,
    storeCourse: state.course
  }),
  dispatch => ({
    actionsSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch),
    actionInstructor: bindActionCreators(instructorActions, dispatch),
    actionBook: bindActionCreators(bookActions, dispatch),
    actionLecture: bindActionCreators(lectureActions, dispatch),
    actionLectures: bindActionCreators(lecturesActions, dispatch),
    actionCourse: bindActionCreators(courseActions, dispatch)
  })
)(Register);
