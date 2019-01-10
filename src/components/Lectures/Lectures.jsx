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
import LecturesCard from '../Lectures/Card/Card';

import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';

import config from '../../config';
const { SERVER_URL } = config();

class Lectures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {},
      lectures: []
    };
  }

  static proptypes = {
    topic: PropTypes.object.isRequired,
    lectures: PropTypes.array.isRequired
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

    const { data } = await http.get(`${SERVER_URL}/l/${topic}`);
    console.log('얘가 강좌 데이터', data);
    this.setState({
      ...this.state,
      lectures: data.lectures
    });
  }

  _renderLecture = () => {
    return (
      <div>
        {this.state.lectures.map(lecture => {
          return (
            <div>
              <LecturesCard
                name={lecture.name}
                image={lecture.screenshot}
                free={lecture.free}
                lang={lecture.lang}
                url={lecture.url}
                // topic={lecture.topic.name}
              />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    console.log('이걸 꼭 확인', this.state.lectures);
    console.log('이건 스테이트', this.state);
    console.log('이건 프롭스', this.props);
    return (
      <React.Fragment>
        <Title title={this.state.topic} />
        <hr />

        {this.state.lectures ? (
          this._renderLecture()
        ) : (
          <DivSpinner>
            <Loader type="Triangle" color="#00BFFF" height="200" width="200" />
          </DivSpinner>
        )}
        {/* <Filter /> */}
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
)(Lectures);
