import React, { Component } from 'react';

import http from '../../services/httpService';
import { Button } from 'reactstrap';

import BookCard from '../Book/Card/Card';
import CommonComment from '../common/Comment/Comment.jsx';
import PaperSheet from '../common/PaperSheet/PaperSheet.jsx';
import urlencode from 'urlencode';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';
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
      comments: data.comments
    };

    actionBook.set_all(book);

    this.setState({
      ...this.state,
      book: data.book[0],
      instructor: data.instructor[0],
      comments: data.comments
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
    const { comments } = this.props.storeBook;
    console.log('[+] Instructor : comments = ', comments);

    return (
      <React.Fragment>
        <BookCard book={this.state.book} />

        <PaperSheet title="Instructor" />

        <CommonComment
          type="book"
          name={this.state.book.name}
          user={user.id}
          comments={comments}
        />

        <PaperSheet title="Review">
          {this.state.review.clicked ? (
            <Button
              color="secondary"
              size="lg"
              block
              onClick={this.handleClickReview}
            >
              Cancel to review
            </Button>
          ) : (
            <Button
              color="primary"
              size="lg"
              block
              onClick={this.handleClickReview}
            >
              Review on {this.state.book.name}
            </Button>
          )}
        </PaperSheet>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    storeSignin: state.signin,
    storeTopics: state.topics,
    storeBook: state.book
  }),
  dispatch => ({
    actionsSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch),
    actionBook: bindActionCreators(bookActions, dispatch)
  })
)(Book);
