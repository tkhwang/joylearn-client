import React from 'react';
import { Redirect } from 'react-router-dom';
import Joi from 'joi-browser';

import './LoginForm.css';
import SocialLoginButton from './SocialLoginButton';
import Form from '../common/Form';
import auth from '../../services/authService';
import Emoji from '../common/Emoji';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email({ minDomainAtoms: 2 })
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="login">
        <h1>Welcome back.</h1>
        {/* <br /> */}
        <div className="social-login">
          Sign up using :
          <SocialLoginButton social="facebook" />
          <SocialLoginButton social="instagram" />
          <SocialLoginButton social="github" />
          <SocialLoginButton social="google" />
          <SocialLoginButton social="kakao" />
          Now under : now in review by Naver
          <SocialLoginButton social="naver" />
          <br />
          Made with <Emoji symbol="❤️" label="smile" />
        </div>
      </div>
    );
  }
}

export default LoginForm;
