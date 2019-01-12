import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import http from '../../services/httpService';

// import Profile from './Profile/Profile';
// import Hex from './Hex/Hex';
// import Jit from './Jit/Jit';
// import Lec from './Lec/Lec';
// import Comments from './Comments/Comments';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import InstructorCard from '../Instructor/Card/Card';
import InstructorCardMk2 from '../Instructor/Card/CardMk2';
import CommonCardList from '../common/Card/CardList.jsx';
import CommonComment from '../common/Comment/Comment.jsx';
import PaperSheet from '../common/PaperSheet/PaperSheet.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';
import * as instructorActions from '../../actions/instructor';

import config from '../../config';
const { SERVER_URL } = config();

// InstructorTitle 추가될 수 있음
// InstructorReview 추가될 수 있음
class Instructor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instructor: {},
      lectures: [],
      comments: [],
      books: []
    };
  }

  static proptypes = {};

  async componentDidMount() {
    const { name } = this.props.name.match.params;
    const { data } = await http.get(`${SERVER_URL}/instructor/${name}`);
    const { actionInstructor } = this.props;

    console.log('[+] Insturcotr : props = ', this.props);

    const instructor = {
      instructor: data.instructor[0],
      lectures: data.lectures,
      comments: data.comments,
      books: data.books
    };
    actionInstructor.set_all(instructor);

    this.setState({
      ...this.state,
      instructor: data.instructor[0],
      lectures: data.lectures,
      comments: data.comments,
      books: data.books
    });
  }

  _renderPage = () => {};

  render() {
    const { user } = this.props.storeSignin;
    const { classes } = this.props;
    const { comments } = this.props.storeInstructor;
    console.log('[+] Instructor : comments = ', comments);

    /* return <InstructorCardMk2 name={lecture.name} url={lecture.url} />; */

    return (
      <React.Fragment>
        <InstructorCard instructor={this.state.instructor} />
        <PaperSheet title="Lectures">
          {this.state.lectures.map(lecture => {
            return (
              <CommonCardList
                title={lecture.name}
                url={lecture.url}
                image={lecture.screenshot}
              />
            );
          })}
        </PaperSheet>
        <PaperSheet title="Books">
          {this.state.books.map(book => {
            return (
              <CommonCardList
                title={book.name}
                url={book.url}
                image={book.screenshot}
              />
            );
          })}
        </PaperSheet>
        {/* <InstructorProfile />
        <InstructorHex />
        <InstructorJit />
        <InstructorLec />
        <InstructorComments /> */}
        <CommonComment
          type="instructor"
          name={this.state.instructor.name}
          user={user.id}
          comments={comments}
        />
      </React.Fragment>
    );
  }
}

// export default Instructor;

export default connect(
  state => ({
    storeSignin: state.signin,
    storeTopics: state.topics,
    storeInstructor: state.instructor
  }),
  dispatch => ({
    actionsSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch),
    actionInstructor: bindActionCreators(instructorActions, dispatch)
  })
)(Instructor);
