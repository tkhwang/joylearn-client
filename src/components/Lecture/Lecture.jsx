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
import BarChart from '../common/Chart/Bar/Chart';
// import LectureBar from '../Lecture/Bar/Bar';
import LecturePie from '../Lecture/Pie/Pie';
// import LectureComments from '../Lecture/Comments/Comments';

import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';
import * as lectureActions from '../../actions/lecture';

import config from '../../config';
const { SERVER_URL } = config();

class Lecture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lecture: {},
      instructor: {},
      comments: [],
      reviews: []
    };
  }

  static propTypes = {};

  async componentDidMount() {
    const { name } = this.props.name.match.params;
    const { actionLecture } = this.props;

    const { data } = await http.get(`${SERVER_URL}/lecture/${name}`);
    console.log('[+] ////////// data = ', data);

    this.setState(
      {
        ...this.state,
        lecture: data.lecture[0],
        instructor: data.instructor[0],
        reviews: data.reviews,
        comments: data.comments
      },
      () => {
        actionLecture.set_all(this.state);
      }
    );
  }

  _renderPage = () => {};

  render() {
    console.log('[+] lecture = ', this.state.lecture);
    console.log('[+] instrucgtor = ', this.state.instructor);
    const { user } = this.props.storeSignin;
    const { comments, reviews } = this.props.storeLecture;
    const { lecture } = this.state;

    return (
      <React.Fragment>
        <PaperSheet title="Lecture : ">
          <DivContainer>
            <DivProfileChart>
              {this.state.lecture ? (
                <LectureProfile
                  lecture={this.state.lecture}
                  tname={this.state.instructor.name}
                />
              ) : null}
              <LecturePie />
            </DivProfileChart>
          </DivContainer>
        </PaperSheet>
        {/* <BarChart reviews={this.props.storeLecture.reviews} /> */}
        <PaperSheet title="Review">
          {reviews ? (
            <CommonReview
              type="lecture"
              name={this.state.lecture.name}
              user={user.name}
              reviews={reviews}
            />
          ) : null}
        </PaperSheet>

        {comments ? (
          <CommonComment
            type="lecture"
            name={this.state.lecture.name}
            user={user.name}
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

const DivContainer = styled.div`
  display: flex;
`;

const DivProfileChart = styled.div`
  display: flex;
  flex-direction: column;
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
    storeTopics: state.topics,
    storeLecture: state.lecture
  }),
  dispatch => ({
    actionSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch),
    actionLecture: bindActionCreators(lectureActions, dispatch)
  })
)(Lecture);
