import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import CommonPaperSheet from '../../../common/PaperSheet/PaperSheet.jsx';
import http, { SERVER_URL } from '../../../../services/httpService.js';
import StarRatingComponent from 'react-star-rating-component';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as instructorActions from '../../../../actions/instructor';
import * as lectureActions from '../../../../actions/lecture';
import * as bookActions from '../../../../actions/book';
import './ReviewStar.css';

class ReviewStar extends Component {
  constructor(props) {
    super(props);

    this.state = { cSelected: [], rating: 0 };

    this.onStarClick = this.onStarClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  handleClick = async e => {
    const {
      type,
      user,
      actionInstructor,
      actionLecture,
      actionBook
    } = this.props;

    const name = decodeURIComponent(this.props.name);
    const apiEndpoint = `${SERVER_URL}/api/review/${type}/${name}`;

    const { data: reviews } = await http.post(apiEndpoint, {
      writer: user,
      review: this.state.rating
    });

    if (type === 'instructor') {
      actionInstructor.add_reviews(reviews);
    } else if (type === 'lecture') {
      actionLecture.add_reviews(reviews);
    } else if (type === 'book') {
      actionBook.add_reviews(reviews);
    }
  };

  render() {
    const { rating } = this.state;
    return (
      <div className="rating-stars">
        <CommonPaperSheet title="Share your review with others :">
          <br />
          <StarRatingComponent
            className="star-rating"
            name="rate1"
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
          />
        </CommonPaperSheet>
        <p />
        <Button color="primary" onClick={this.handleClick}>
          Submit : {this.state.rSelected}
        </Button>
      </div>
    );
  }
}

// export default ReviewStar;
export default connect(
  state => ({
    storeInstructor: state.instructor
  }),
  dispatch => ({
    actionInstructor: bindActionCreators(instructorActions, dispatch),
    actionLecture: bindActionCreators(lectureActions, dispatch),
    actionBook: bindActionCreators(bookActions, dispatch)
  })
)(ReviewStar);
