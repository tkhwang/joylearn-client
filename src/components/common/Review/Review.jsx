import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Review extends Component {
  constructor(props) {
    super(props);
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

  render() {
    const { name } = this.props;

    return (
      <React.Fragment>
        {this.state.clicked ? (
          <Button color="secondary" size="lg" block onClick={this.handleClick}>
            Cancle to review
          </Button>
        ) : (
          <Button color="primary" size="lg" block onClick={this.handleClick}>
            Click to review on {name}
          </Button>
        )}
      </React.Fragment>
    );
  }
}

export default Review;
