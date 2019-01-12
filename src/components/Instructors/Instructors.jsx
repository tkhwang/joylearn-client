import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input as ReactstrapInput
} from 'reactstrap';

import http from '../../services/httpService';
// import auth from '../../services/authService';
// import querystring from 'query-string';

import Title from '../common/Title/Title';
// import List from './List/List';
import InstructorsCard from '../Instructors/Card/Card';
import InstructorsFilter from '../Instructors/Filter/Filter';
import filterByInput from '../../services/searchService';

import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';

import config from '../../config';
const { SERVER_URL } = config();

class Instructors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {},
      instructors: [],
      fullInstructors: [],
      value: ''
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
    this.setState({
      ...this.state,
      instructors: data.instructors,
      fullInstructors: data.instructors
    });
  }

  // 변하지 않는 기준점이 있어야 한다. (filter의 기준점이 될)
  _handleChange = event => {
    this.setState(
      {
        ...this.state,
        value: event.target.value
      },
      () => {
        let selectedInstructor = filterByInput(
          this.state.fullInstructors,
          this.state.value
        );
        this.setState({
          ...this.state,
          instructors: selectedInstructor
        });
      }
    );
  };

  _renderInstructor = () => {
    return (
      <div>
        {this.state.instructors.map(instructor => {
          return (
            <InstructorsCard
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
    return (
      <React.Fragment>
        <Title title={this.state.topic} />
        <hr />

        <InputGroup>
          <InputGroupAddon addonType="prepend">?</InputGroupAddon>
          <ReactstrapInput
            placeholder="Search your mentor"
            value={this.state.value}
            onChange={this._handleChange}
          />
        </InputGroup>

        <DivContainer>
          {this.state.instructors ? (
            this._renderInstructor()
          ) : (
            <DivSpinner>
              <Loader
                type="Triangle"
                color="#00BFFF"
                height="200"
                width="200"
              />
            </DivSpinner>
          )}

          <InstructorsFilter />
        </DivContainer>
      </React.Fragment>
    );
  }
}

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

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
