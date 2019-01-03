import React, { Component } from 'react';
import styled from 'styled-components';
import http from '../../services/httpService';
import auth from '../../services/authService';
import querystring from 'query-string';

import TopicsSearch from './TopicsSearch';
import TopicsDetail from './TopicsDetail';

// import './Topics.css';
import config from '../../config';
const { SERVER_URL } = config();

// 로그인을 했을 때의 홈 화면
export default class Topics extends Component {
  state = {};

  async componentDidMount() {
    const values = querystring.parse(this.props.location.search);
    console.log('[+] Topics : jwt = ', values);
    if (values.token) auth.loginWithJwt(values.token);

    const topics = await http.get(SERVER_URL + '/topics');
    // console.log(topics);
    this.setState({
      topics: topics.data
    });
  }

  _renderTopics = () => {
    return (
      <TopicsMenu>
        {this.state.topics.map((topic, index) => {
          return (
            <TopicsDetail name={topic.name} logo={topic.logo} key={index} />
          );
        })}
      </TopicsMenu>
    );
  };

  render() {
    return (
      <React.Fragment>
        <TopicsSearch />
        {this.state.topics ? this._renderTopics() : 'Loadings'}
      </React.Fragment>
    );
  }
}

const TopicsMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// export default Topics;
