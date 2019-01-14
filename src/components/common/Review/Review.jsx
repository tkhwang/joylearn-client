import React, { Component } from 'react';
import { Button } from 'reactstrap';

import ReviewForm from './ReviewForm.jsx';

class Review extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      clicked: false
    };
  }

  handleClick = e => {
    this.setState(prevState => ({
      ...this.state,
      clicked: !prevState.clicked
    }));
  };

  handleSubmit = () => {};

  render() {
    const { type, name, user } = this.props;

    return (
      <React.Fragment>
        {this.state.clicked ? (
          <React.Fragment>
            <Button
              color="secondary"
              size="lg"
              block
              onClick={this.handleClick}
            >
              Click to Review on {name}
            </Button>
            <ReviewForm type={type} name={name} user={user} />
          </React.Fragment>
        ) : (
          <Button color="primary" size="lg" block onClick={this.handleClick}>
            Click to Review on {name}
          </Button>
        )}
      </React.Fragment>
    );
  }
}

export default Review;
