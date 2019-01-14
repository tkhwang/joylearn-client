import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import http, { SERVER_URL } from '../../../services/httpService.js';

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

  handleClick = e => {
    const { type, name, user } = this.props;
    console.log('[+] //////// ', type, name, this.state.rSelected);

    const apiEndpoint = `${SERVER_URL}/api/review/${type}/${name}`;
    http.post(apiEndpoint, {
      writer: user,
      review: this.state.rSelected
    });
  };

  render() {
    return (
      <div>
        <h5>
          Share your view : [1] Worst, [2] Bad, [3] So so, [4] Better, [5] Best
        </h5>
        <ButtonGroup>
          <Button
            color="danger"
            onClick={() => this.onRadioBtnClick(1)}
            active={this.state.rSelected === 1}
          >
            Worst
          </Button>
          <Button
            color="warning"
            onClick={() => this.onRadioBtnClick(2)}
            active={this.state.rSelected === 2}
          >
            Bad
          </Button>
          <Button
            color="secondary"
            onClick={() => this.onRadioBtnClick(3)}
            active={this.state.rSelected === 3}
          >
            So so
          </Button>
          <Button
            color="success"
            onClick={() => this.onRadioBtnClick(4)}
            active={this.state.rSelected === 4}
          >
            Better
          </Button>
          <Button
            color="primary"
            onClick={() => this.onRadioBtnClick(5)}
            active={this.state.rSelected === 5}
          >
            Best
          </Button>
        </ButtonGroup>
        <p />
        <Button color="primary" onClick={this.handleClick}>
          Submit : {this.state.rSelected}
        </Button>
      </div>
    );
  }
}

export default RadioStrap;
