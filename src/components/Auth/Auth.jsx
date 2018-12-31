import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import querystring from 'query-string';

import auth from '../../services/authService';

class Auth extends Component {
  componentDidMount() {
    const values = querystring.parse(this.props.location.search);
    console.log(values);

    if (values) auth.loginWithJwt(values.token);
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default Auth;
