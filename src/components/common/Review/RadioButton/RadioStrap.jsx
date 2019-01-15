import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import CommonPaperSheet from '../../../common/PaperSheet/PaperSheet.jsx';
import http, { SERVER_URL } from '../../../../services/httpService.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as instructorActions from '../../../../actions/instructor';

class RadioStrap extends Component {
  constructor(props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  handleClick = async e => {
    const { type, name, user, actionInstructor } = this.props;
    console.log('[+] //////// ', type, name, this.state.rSelected);

    const apiEndpoint = `${SERVER_URL}/api/review/${type}/${name}`;
    const { data: reviews } = await http.post(apiEndpoint, {
      writer: user,
      review: this.state.rSelected
    });
    console.log('[+]///// data = ', reviews);
    actionInstructor.add_reviews(reviews);
  };

  render() {
    return (
      <div>
        <CommonPaperSheet title="Share your review with others :">
          <ButtonGroup>
            <Button
              color="danger"
              onClick={() => this.onRadioBtnClick(1)}
              active={this.state.rSelected === 1}
            >
              Worst [1]
            </Button>
            <Button
              color="warning"
              onClick={() => this.onRadioBtnClick(2)}
              active={this.state.rSelected === 2}
            >
              Bad [2]
            </Button>
            <Button
              color="secondary"
              onClick={() => this.onRadioBtnClick(3)}
              active={this.state.rSelected === 3}
            >
              So so [3]
            </Button>
            <Button
              color="primary"
              onClick={() => this.onRadioBtnClick(4)}
              active={this.state.rSelected === 4}
            >
              Better [4]
            </Button>
            <Button
              color="success"
              onClick={() => this.onRadioBtnClick(5)}
              active={this.state.rSelected === 5}
            >
              Best [5]
            </Button>
          </ButtonGroup>
        </CommonPaperSheet>
        <p />
        <Button color="primary" onClick={this.handleClick}>
          Submit : {this.state.rSelected}
        </Button>
      </div>
    );
  }
}

// export default RadioStrap;
export default connect(
  state => ({
    storeInstructor: state.instructor
  }),
  dispatch => ({
    actionInstructor: bindActionCreators(instructorActions, dispatch)
  })
)(RadioStrap);
