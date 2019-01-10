import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import http from '../../services/httpService';
import auth from '../../services/authService';
import querystring from 'query-string';

// import Search from './Search/Search';
// import Button from './Button/Button';
import CardTopic from '../common/Card/CardTopic';
// import Input from '../common/Input/Input';

import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';

import config from '../../config';
const { SERVER_URL } = config();

// 로그인을 했을 때의 홈 화면
class Topics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
      value: ''
    };
  }

  async componentDidMount() {
    const { actionTopics } = this.props;
    const { actionsSign } = this.props;

    const values = querystring.parse(this.props.location.search);
    if (values.token) {
      auth.loginWithJwt(values.token);
      actionsSign.signin();
    }

    const data = await http.get(SERVER_URL + '/topics');

    actionTopics.get_topics(data.data);
    this.setState({
      ...this.state,
      topics: data.data
    });
  }

  handleChange = event => {
    console.log('[+] handleChange = ', event.target.value);

    this.setState(
      {
        ...this.state,
        value: event.target.value
      },
      () => {
        const { topics } = this.props.storeTopics;
        let topicSelected = topics.filter(topic => {
          return topic.name.indexOf(this.state.value) !== -1;
        });
        this.setState({
          ...this.state,
          topics: topicSelected
        });
      }
    );
  };

  _renderTopics = () => {
    return (
      <DivTopicsMenu>
        {this.state.topics.map((topic, index, topics) => {
          return (
            <CardTopic
              image={topic.logo}
              title={topic.name}
              description={''}
              key={topic}
            />
          );
        })}
      </DivTopicsMenu>
    );
  };

  render() {
    return (
      <React.Fragment>
        {/* <Search /> */}
        {/* <Input label="Search Topics which you want to learn." /> */}
        <InputGroup>
          <InputGroupAddon addonType="prepend">?</InputGroupAddon>
          <Input
            placeholder="Search Topics which you want to learn."
            value={this.state.value}
            onChange={this.handleChange}
          />
        </InputGroup>
        {this.state.topics ? (
          this._renderTopics()
        ) : (
          <DivSpinner>
            <Loader type="Triangle" color="#00BFFF" height="200" width="200" />
          </DivSpinner>
        )}
      </React.Fragment>
    );
  }
}

const DivTopicsMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 30px 30px 30px;
`;

const DivSpinner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
`;

// export default Topics;
// 리액트일 경우에만 사용 / 리덕스인 경우 아래를 export

export default connect(
  state => ({
    storeSignin: state.signin,
    storeTopics: state.topics
  }),
  dispatch => ({
    actionsSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch)
  })
)(Topics);
