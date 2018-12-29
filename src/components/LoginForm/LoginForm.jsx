import React, { Component } from 'react';
import Input from '../common/Input';
import { Redirect } from 'react-router-dom';
import Joi from 'joi-browser';
import { GithubLoginButton } from 'react-social-login-buttons';

import './LoginForm.css';
import Form from '../common/Form';
import auth from '../../services/authService';
import config from '../../config';
const { SERVER_URL } = config();

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
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
    const urlAuthGithub = `${SERVER_URL}/auth/github`;
    const urlAuthKakao = `${SERVER_URL}/auth/kakao`;
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
        <div className="social-login">
          <h3>You may also connect with </h3>
          <a href={urlAuthKakao}>
            <img
              src={require('./img/kakao_account_login_btn_medium_wide.png')}
              alt="loginKakaoButton"
            />
          </a>
          <a href={urlAuthGithub}>
            <GithubLoginButton />
          </a>
        </div>
      </div>
    );
  }
}

export default LoginForm;
