import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

import CommonSearchList from '../../common/SearchList/SearchList.jsx';
import IntegrationAutosuggest from '../IntegrationAutosuggest/IntegrationAutosuggest.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActions from '../../../actions/signin';
import * as topicsActions from '../../../actions/topics';
import * as instructorActions from '../../../actions/instructor';
import * as bookActions from '../../../actions/book';
import * as lectureActions from '../../../actions/lecture';
import * as lecturesActions from '../../../actions/lectures';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueTitle: '',
      courseUnit: 0
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  componentDidMount() {
    const { storeTopics, storeLecture } = this.props;

    console.log('[+] //////// storeTopics = ', storeTopics);
    console.log('[+] //////// storeLecture = ', storeLecture);
  }

  handleChangeTitle(event) {
    this.setState({ valueTitle: event.target.value });
  }

  handleSubmitClick() {}

  render() {
    const { topics } = this.props.storeTopics;
    const { lectures } = this.props.storeLectures;
    return (
      <React.Fragment>
        <CommonSearchList
          type="topic"
          title="Topic"
          arrays={topics}
          courseUnit={this.courseUnit}
        />
        <CommonSearchList
          type="lecture"
          title="Lecture"
          arrays={lectures}
          courseUnit={this.courseUnit}
        />
        <Button
          color="primary"
          size="lg"
          block
          onClick={this.handleSubmitClick}
        >
          Submit
        </Button>
      </React.Fragment>
    );
  }
}

// export default Register;
export default connect(
  state => ({
    storeSignin: state.signin,
    storeTopics: state.topics,
    storeInstructor: state.instructor,
    storeBook: state.book,
    storeLecture: state.lecture,
    storeLectures: state.lectures
  }),
  dispatch => ({
    actionsSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch),
    actionInstructor: bindActionCreators(instructorActions, dispatch),
    actionBook: bindActionCreators(bookActions, dispatch),
    actionLecture: bindActionCreators(lectureActions, dispatch),
    actionLectures: bindActionCreators(lecturesActions, dispatch)
  })
)(Register);
