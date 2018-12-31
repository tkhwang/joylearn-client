import React, { Component } from 'react';

import auth from '../../services/authService';

class Topic extends Component {
  componentDidMount() {
    console.log(this.props.location.search);
    const params = new URLSearchParams(this.props.location.search);
    const token = params.get('token');

    if (token) auth.loginWithJwt(token);
  }
  render() {
    return (
      <div>
        <h1>Topic </h1>
      </div>
    );
  }
}

export default Topic;
