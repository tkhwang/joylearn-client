import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import http from '../../services/httpService';
import auth from '../../services/authService';
import querystring from 'query-string';

import Search from './Search/Search';
import Button from './Button/Button';

import * as signinActions from '../../actions/signin';
import * as topicsActiosn from '../../actions/topics';

// import './Topics.css';
import config from '../../config';
const { SERVER_URL } = config();

// 로그인을 했을 때의 홈 화면
class Topics extends Component {
  state = {};

  async componentDidMount() {
    const { actionTopics } = this.props;

    console.log('[+] redux = ', this.props);
    const { actionsSign } = this.props;

    const values = querystring.parse(this.props.location.search);
    console.log('[+] Topics : jwt = ', values);
    if (values.token) {
      auth.loginWithJwt(values.token);
      actionsSign.signin();
    }

    const data = await http.get(SERVER_URL + '/topics');
    console.log('[+] Topics = ', data);

    actionTopics.get_topics(data.data);
    this.setState({
      topics: data.data
    });
  }

  _renderTopics = () => {
    return (
      <TopicsMenu>
        {this.state.topics.map((topic, index, topics) => {
          return (
            <Button
              name={topic.name}
              logo={topic.logo}
              key={index}
              topics={topics}
            />
          );
        })}
      </TopicsMenu>
    );
  };

  // TODO:Change Loading
  render() {
    return (
      <React.Fragment>
        <Search />
        {this.state.topics ? this._renderTopics() : 'Loadings'}
      </React.Fragment>
    );
  }
}

const TopicsMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 30px 30px 30px;
`;

// export default Topics;

export default connect(
  state => ({
    storeSignin: state.signin,
    storeTopics: state.topics
  }),
  dispatch => ({
    actionsSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActiosn, dispatch)
  })
)(Topics);
