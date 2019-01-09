import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import http from '../../services/httpService';
// import auth from '../../services/authService';
// import querystring from 'query-string';

import Title from '../common/Title/Title';
// import List from './List/List';
// import Filter from './Filter/Filter';

import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';

// import config from '../../config';
// const { SERVER_URL } = config();

class Instructors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {},
      instructors: []
    };
  }

  static proptypes = {
    topic: PropTypes.object.isRequired,
    instructors: PropTypes.array.isRequired
  };

  async componentDidMount() {
    const { topic } = this.props.topic.match.params;
    console.log('이건 토픽', topic);

    const { topics } = this.props.storeTopics;
    const selectedTopic = topics.filter(list => {
      return list.name === topic;
    })[0];
    console.log('이건 선택된 토픽', selectedTopic);

    this.setState({
      ...this.state,
      topic: selectedTopic
    });
  }

  _renderInstructor = () => {};

  render() {
    console.log('이건 스테이트', this.state);
    console.log('이건 프롭스', this.props);
    return (
      <React.Fragment>
        <Title title={this.state.topic} />
        {/* <List />
        <Filter /> */}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    storeSignin: state.signin,
    storeTopics: state.topics
  }),
  dispatch => ({
    actionSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch)
  })
)(Instructors);
