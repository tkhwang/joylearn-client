import React, { Component } from 'react';
import querystring from 'query-string';

import auth from '../../services/authService';

class Topic extends Component {
  componentDidMount() {
    console.log(this.props.location.search);

    const values = querystring.parse(this.props.location.search);
    if (values) auth.loginWithJwt(values.token);
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
