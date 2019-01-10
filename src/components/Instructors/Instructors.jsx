import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';

import http from '../../services/httpService';
// import auth from '../../services/authService';
// import querystring from 'query-string';

import Title from '../common/Title/Title';
// import List from './List/List';
// import Filter from './Filter/Filter';
import CardCardInstructors from '../common/Card/CardInstructors';

import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';

import config from '../../config';
const { SERVER_URL } = config();

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
    const { topics } = this.props.storeTopics;
    const selectedTopic = topics.filter(list => {
      return list.name === topic;
    })[0];

    this.setState({
      ...this.state,
      topic: selectedTopic
    });

    const { data } = await http.get(`${SERVER_URL}/i/${topic}`);
    console.log('얘가 강사 데이터', data);
    this.setState({
      ...this.state,
      instructors: data.instructors
    });
  }

  _renderInstructor = () => {
    return (
      <div>
        {this.state.instructors.map(instructor => {
          return (
            <CardCardInstructors
              name={instructor.name}
              image={instructor.image}
              lang={instructor.lang}
              url={instructor.mainUrl}
              // topic={lecture.topic.name}
            />
          );
        })}
      </div>
    );
  };

  render() {
    console.log('이건 스테이트', this.state);
    console.log('이건 프롭스', this.props);
    return (
      <React.Fragment>
        <Title title={this.state.topic} />
        <hr />

        {this.state.instructors ? (
          this._renderInstructor()
        ) : (
          <DivSpinner>
            <Loader type="Triangle" color="#00BFFF" height="200" width="200" />
          </DivSpinner>
        )}

        {/* <List />
        <Filter /> */}
      </React.Fragment>
    );
  }
}

const DivSpinner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
`;

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
