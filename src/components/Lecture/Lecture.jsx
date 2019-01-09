import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Loader from 'react-loader-spinner';

// import http from '../../services/httpService';
// import auth from '../../services/authService';
// import querystring from 'query-string';

import LectureTitle from '../common/Title/Title';
// import LectureProfile from './LectureProfile';
// import LectureBar from './LectureBar';
// import LectureComments from './LectureComments';

import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';

// import config from '../../config';
// const { SERVER_URL } = config();

class Lecture extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    // const { actionTopics } = this.props;
    // const { actionsSign } = this.props;
    // const values = querystring.parse(this.props.location.search);
    // if (values.token) {
    //   auth.loginWithJwt(values.token);
    //   actionsSign.signin();
    // }
    // const data = await http.get(`${SERVER_URL}/l/${topic}`);
    // const data = await http.get(`${SERVER_URL}/l`);
    // actionTopics.get_topics(data.data);
    // this.setState({
    //   topics: data.data
    // });
  }

  render() {
    // console.log('이걸 확인', this.props);
    return (
      <React.Fragment>
        <LectureTitle title={this.state.title} />
        {/* <LectureProfile /> */}
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
