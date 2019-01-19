import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

import CommonSearchList from '../../common/SearchList/SearchList.jsx';
// import IntegrationAutosuggest from '../IntegrationAutosuggest/IntegrationAutosuggest.jsx';
import CourseComment from '../../Courses/Comment/Comment.jsx';
import CommonPaperSheet from '../../common/PaperSheet/PaperSheet.jsx';
import CourseRender from '../CourseRender/CourseRender.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActions from '../../../actions/signin';
import * as topicsActions from '../../../actions/topics';
import * as topicActions from '../../../actions/topic';
import * as instructorActions from '../../../actions/instructor';
import * as bookActions from '../../../actions/book';
import * as lectureActions from '../../../actions/lecture';
import * as lecturesActions from '../../../actions/lectures';
import * as courseActions from '../../../actions/course';

import http, { SERVER_URL } from '../../../services/httpService.js';

class CourseRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      topic: '',
      lecture: '',
      book: '',
      comment: '',
      step: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickRegisterCourseUnit = this.handleClickRegisterCourseUnit.bind(
      this
    );
  }

  componentDidMount() {
    const { storeTopics, storeLecture } = this.props;

    console.log('[+] //////// storeTopics = ', storeTopics);
    console.log('[+] //////// storeLecture = ', storeLecture);
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      comment: e.target.value
    });
  };

  handleClickRegisterCourseUnit = e => {
    const { actionCourse } = this.props;
    const { topic, lecture, book } = this.props.storeCourse;

    let course = {};
    topic && (course.topic = topic);
    lecture && (course.lecture = lecture);
    book && (course.book = book);
    actionCourse.add_course(course);
    // actionCourse.set_comment(this.state.comment);
  };

  handleClick = () => {
    this.setState(prevState => ({
      ...this.state,
      isClicked: !prevState.isClicked
    }));
  };

  render() {
    const { topics } = this.props.storeTopics;
    const { lectures } = this.props.storeCourse.data;
    const { books } = this.props.storeCourse.data;
    const { courses } = this.props.storeCourse;

    return (
      <React.Fragment>
        {this.state.isClicked ? (
          <React.Fragment>
            <Button
              color="secondary"
              size="lg"
              block
              onClick={this.handleClick}
            >
              Cancle to Register New Course
            </Button>
            <CommonPaperSheet title="New Course">
              <CourseRender courses={courses} />
              <Button
                color="primary"
                size="lg"
                block
                onClick={this.handleClickSubmitNewCourse}
              >
                Submit New Course
              </Button>
            </CommonPaperSheet>
            <CommonPaperSheet title="One step in your new Course">
              <h5>1. Select Topic </h5>
              <CommonSearchList type="topic" title="Topic" arrays={topics} />
              <h5>2. Select Lecture or Book</h5>
              <CommonSearchList
                type="lecture"
                title="Lecture"
                arrays={lectures}
              />
              <CommonSearchList type="book" title="Book" arrays={books} />
              <h5>3. Share why you recommend this.</h5>
              {/* <CourseComment type="instructor" name="" user="" comments="" /> */}
              <InputGroup>
                <InputGroupAddon addonType="comment">
                  <InputGroupText>Comment</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  name="title"
                  placeholder="placeholder"
                  value={this.state.comment}
                  onChange={this.handleChange}
                />
              </InputGroup>
              <br />
              <Button
                color="primary"
                size="lg"
                block
                onClick={this.handleClickRegisterCourseUnit}
              >
                Register One CourseUnit for New Course
              </Button>
            </CommonPaperSheet>
          </React.Fragment>
        ) : (
          <Button color="primary" size="lg" block onClick={this.handleClick}>
            Submit New Course
          </Button>
        )}
      </React.Fragment>
    );
  }
}

// export default CourseRegister;
export default connect(
  state => ({
    storeSignin: state.signin,
    storeTopics: state.topics,
    storeTopic: state.topic,
    storeInstructor: state.instructor,
    storeBook: state.book,
    storeLecture: state.lecture,
    storeLectures: state.lectures,
    storeCourse: state.course
  }),
  dispatch => ({
    actionsSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch),
    actionTopic: bindActionCreators(topicActions, dispatch),
    actionInstructor: bindActionCreators(instructorActions, dispatch),
    actionBook: bindActionCreators(bookActions, dispatch),
    actionLecture: bindActionCreators(lectureActions, dispatch),
    actionLectures: bindActionCreators(lecturesActions, dispatch),
    actionCourse: bindActionCreators(courseActions, dispatch)
  })
)(CourseRegister);
