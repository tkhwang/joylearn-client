import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Loader from 'react-loader-spinner';

import http from '../../services/httpService';
// import auth from '../../services/authService';
// import querystring from 'query-string';

import LectureProfile from '../Lecture/Profile/Profile';
// import LectureBar from '../Lecture/Bar/Bar';
// import LectureComments from '../Lecture/Comments/Comments';

import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';

import config from '../../config';
const { SERVER_URL } = config();

class Lecture extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const { name } = this.props.name.match.params;
    const data = await http.get(`${SERVER_URL}/lecture/${name}`);
    console.log('[*] lecture data : ', data);

    this.setState({
      ...this.state,
      lecture: data.data.lecture[0],
      instructor: data.data.instructor[0]
    });
  }

  _renderPage = () => (
    <LectureProfile
      name={this.state.lecture.name}
      image={this.state.lecture.screenshot}
      url={this.state.lecture.url}
      free={this.state.lecture.free}
      lang={this.state.lecture.lang}
      tname={this.state.instructor.name}
    />
  );

  render() {
    console.log('state check: ', this.state);
    return (
      <React.Fragment>
        {this.state.lecture && this.state.instructor
          ? this._renderPage()
          : 'loading'}
        {/* <LectureBar /> */}
        {/* <LectureComments /> */}
      </React.Fragment>
    );
  }
}

// export default Lecture;

export default connect(
  state => ({
    storeSignin: state.signin,
    storeTopics: state.topics
  }),
  dispatch => ({
    actionSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch)
  })
)(Lecture);
