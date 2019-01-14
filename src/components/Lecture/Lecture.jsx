import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import http from '../../services/httpService';
// import auth from '../../services/authService';
// import querystring from 'query-string';

import CommonReview from '../common/Review/Review.jsx';
import CommonComment from '../common/Comment/Comment.jsx';
import PaperSheet from '../common/PaperSheet/PaperSheet.jsx';
import LectureProfile from '../Lecture/Profile/Profile';
import LectureBar from '../Lecture/Bar/Bar';
// import LectureComments from '../Lecture/Comments/Comments';

import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';
import * as lectureActions from '../../actions/lecture';

import config from '../../config';
const { SERVER_URL } = config();

class Lecture extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  async componentDidMount() {
    const { name } = this.props.name.match.params;
    const { actionLecture } = this.props;

    const data = await http.get(`${SERVER_URL}/lecture/${name}`);

    this.setState(
      {
        ...this.state,
        lecture: data.data.lecture[0],
        instructor: data.data.instructor[0]
      },
      () => {
        actionLecture.set_all(this.state.lecture);
      }
    );
  }

  _renderPage = () => (
    <LectureProfile
      // name={this.state.lecture.name}
      // image={this.state.lecture.screenshot}
      // url={this.state.lecture.url}
      // free={this.state.lecture.free}
      // lang={this.state.lecture.lang}
      tname={this.state.instructor.name}
    />
  );

  render() {
    console.log('[+] lecture = ', this.state.lecture);
    console.log('[+] instrucgtor = ', this.state.instructor);
    const { user } = this.props.storeSignin;
    const { comments } = this.props.storeLecture;
    const { lecture } = this.state;

    return (
      <React.Fragment>
        <PaperSheet title="Lecture : ">
          {this.state.lecture ? (
            <LectureProfile
              name={this.state.lecture.name}
              image={this.state.lecture.screenshot}
              url={this.state.lecture.url}
              free={this.state.lecture.free}
              lang={this.state.lecture.lang}
              tname={this.state.instructor.name}
            />
          ) : null}
        </PaperSheet>
        <PaperSheet title="Review">
          {this.state.lecture ? (
            <CommonReview name={this.state.lecture.name} />
          ) : null}
        </PaperSheet>
        {this.state.lecture ? (
          <CommonComment
            type="lecture"
            name={this.state.lecture.name}
            user={user.id}
            comments={comments}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

//       <React.Fragment>
//         {this.state.lecture && this.state.instructor ? (
//           this._renderPage()
//         ) : (
//           <DivSpinner>
//             <Loader type="Triangle" color="#00BFFF" height="200" width="200" />
//           </DivSpinner>
//         )}
//         {/* <LectureBar /> */}
// {/* <LectureComments /> */ }
//       </React.Fragment >

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
    storeTopics: state.topics,
    storeLecture: state.lecture
  }),
  dispatch => ({
    actionSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch),
    actionLecture: bindActionCreators(lectureActions, dispatch)
  })
)(Lecture);
