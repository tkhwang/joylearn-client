import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import http from '../../services/httpService';

// import Profile from './Profile/Profile';
// import Hex from './Hex/Hex';
// import Jit from './Jit/Jit';
// import Lec from './Lec/Lec';
// import Comments from './Comments/Comments';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from 'reactstrap';

import InstructorCard from '../Instructor/Card/Card';
import BarChart from '../common/Chart/Bar/Chart';
// import BarChart from '../Instructor/Bar/Bar';
import CommonCardList from '../common/Card/CardList.jsx';
import CommonComment from '../common/Comment/Comment.jsx';
import CommonReview from '../common/Review/Review.jsx';
import PaperSheet from '../common/PaperSheet/PaperSheet.jsx';
// import Svg from '../Instructor/Svg/Chart';
// import Radar from '../Instructor/Radar/Chart';
// import TestChart from '../Instructor/Svg/TestChart';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';
import * as instructorActions from '../../actions/instructor';

import config from '../../config';
const { SERVER_URL } = config();

class Instructor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instructor: {},
      lectures: [],
      books: [],
      comments: [],
      reviews: [],
      review: { clicked: false },
      comment: { clicked: false }
      // data: []
    };

    this.handleClickReview = this.handleClickReview.bind(this);
    this.handleClickComment = this.handleClickComment.bind(this);
  }

  static proptypes = {};

  async componentDidMount() {
    const { name } = this.props.name.match.params;
    const { data } = await http.get(`${SERVER_URL}/instructor/${name}`);
    const { actionInstructor } = this.props;

    console.log('[+] Insturcotr : props = ', data);

    const instructor = {
      instructor: data.instructor[0],
      lectures: data.lectures,
      books: data.books,
      comments: data.comments,
      reviews: data.reviews
    };
    actionInstructor.set_all(instructor);

    this.setState({
      ...this.state,
      instructor: data.instructor[0],
      lectures: data.lectures,
      comments: data.comments,
      books: data.books,
      reviews: data.reviews
    });
  }

  handleClickReview = e => {
    this.setState(prevState => ({
      ...this.state,
      review: {
        ...this.state.review,
        clicked: !prevState.review.clicked
      }
    }));
  };

  handleClickComment = e => {
    this.setState(prevState => ({
      ...this.state,
      comment: {
        ...this.state.review,
        clicked: !prevState.comment.clicked
      }
    }));
  };

  _renderPage = () => {};

  render() {
    const { user } = this.props.storeSignin;
    const { classes } = this.props;
    const { comments, reviews } = this.props.storeInstructor;
    // console.log('[+] Instructor : comments = ', comments);
    console.log(
      'this.props.storeInstructor.reviews : ',
      this.props.storeInstructor.reviews
    );

    return (
      <React.Fragment>
        <InstructorCard instructor={this.state.instructor} />
        <BarChart reviews={this.props.storeInstructor.reviews} />
        <PaperSheet title="Lectures">
          {this.state.lectures.map(lecture => {
            return (
              <CommonCardList
                type="lecture"
                title={lecture.name}
                url={lecture.url}
                image={lecture.screenshot}
                time=""
              />
            );
          })}
        </PaperSheet>
        <PaperSheet title="Books">
          {this.state.books.map(book => {
            return (
              <CommonCardList
                type="book"
                title={book.name}
                url={book.url}
                image={book.screenshot}
                time=""
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
          user={user.name}
          comments={comments}
        />
        <PaperSheet title="Review">
          <CommonReview
            type="instructor"
            name={this.state.instructor.name}
            user={user.name}
            reviews={reviews}
          />
        </PaperSheet>
      </React.Fragment>
    );
  }
}

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
