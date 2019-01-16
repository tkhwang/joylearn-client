import React, { Component } from 'react';

import http from '../../services/httpService';
import { Button } from 'reactstrap';

import urlencode from 'urlencode';
import BookCard from '../Book/Card/Card';
import BarChart from '../common/Chart/Bar/Chart';
import CommonReview from '../common/Review/Review.jsx';
import CommonComment from '../common/Comment/Comment.jsx';
import PaperSheet from '../common/PaperSheet/PaperSheet.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';
import * as instructorActions from '../../actions/instructor';
import * as bookActions from '../../actions/book';

import config from '../../config';
const { SERVER_URL } = config();

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      instructor: {},
      comments: [],
      reviews: [],
      review: { clicked: false },
      comment: { clicked: false }
    };

    this.handleClickReview = this.handleClickReview.bind(this);
    this.handleClickComment = this.handleClickComment.bind(this);
  }

  static propTypes = {};

  async componentDidMount() {
    const { name } = this.props.name.match.params;
    const { data } = await http.get(`${SERVER_URL}/book/${urlencode(name)}`);
    const { actionBook } = this.props;
    console.log('[+] Book : props = ', this.props);

    const book = {
      book: data.book[0],
      instructor: data.instructor[0],
      comments: data.comments,
      reviews: data.reviews
    };

    actionBook.set_all(book);

    this.setState({
      ...this.state,
      book: data.book[0],
      instructor: data.instructor[0],
      comments: data.comments,
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

  render() {
    const { user } = this.props.storeSignin;
    const { classes } = this.props;
    const { comments, reviews } = this.props.storeBook;
    console.log('[+] Instructor : comments = ', comments);

    return (
      <React.Fragment>
        <BookCard book={this.state.book} instructor={this.state.instructor} />
        <BarChart reviews={this.props.storeBook.reviews} />
        <PaperSheet title="Instructor" />

        <CommonComment
          type="book"
          name={this.state.book.name}
          user={user.name}
          comments={comments}
        />

        <PaperSheet title="Review">
          <CommonReview
            type="book"
            name={this.state.book.name}
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
    storeInstructor: state.instructor,
    storeBook: state.book
  }),
  dispatch => ({
    actionsSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch),
    actionInstructor: bindActionCreators(instructorActions, dispatch),
    actionBook: bindActionCreators(bookActions, dispatch)
  })
)(Book);
