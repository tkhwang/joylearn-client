import React, { Component } from 'react';
import querystring from 'query-string';

import auth from '../../services/authService';

class Topic extends Component {
  componentDidMount() {
    const values = querystring.parse(this.props.location.search);
    console.log('[+] Topics : jwt = ', values);
    if (values.token) auth.loginWithJwt(values.token);
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
