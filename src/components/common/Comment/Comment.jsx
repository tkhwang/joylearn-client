import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';

import PaperSheet from '../../common/PaperSheet/PaperSheet.jsx';
import CommonCommentRender from '../../common/Comment/Render/Render.jsx';
import CommonCommentList from '../../common/Comment/List/List.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as instructorActions from '../../../actions/instructor';

import http from '../../../services/httpService';
import { SERVER_URL } from '../../../services/httpService';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = { text: '', clicked: false };

    this.handleClickComment = this.handleClickComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleClickComment = e => {
    this.setState(prevState => ({
      ...this.state,
      clicked: !prevState.clicked
    }));
  };

  handleClick = e => {
    console.log(this.state.text);
    const { type, name, actionInstructor } = this.props;
    const apiEndpoint = `${SERVER_URL}/api/${type}/${name}`;

    console.log(apiEndpoint);

    if (type === 'instructor') {
      const comments = { writer: this.props.user, content: this.state.text };
      console.log('[+] Comment : comments = ', comments);

      actionInstructor.add_comments(comments);
      this.setState({
        text: ''
      });
    }

    return http.post(apiEndpoint, {
      writer: this.props.user,
      content: this.state.text
    });
  };

  render() {
    return (
      <div>
        <PaperSheet title="Comment">
          {this.state.clicked ? (
            <React.Fragment>
              <Button
                color="secondary"
                size="lg"
                block
                onClick={this.handleClickComment}
              >
                Cancle to comment...
              </Button>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  {/* <Label for="exampleText">Edit...</Label> */}
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    placeholder="Please share your thought. (Markdown syntax supported.)"
                    style={{ height: 200 }}
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <CommonCommentRender comments={this.state.text} />
                <Button
                  color="primary"
                  size="lg"
                  block
                  onClick={this.handleClick}
                >
                  Submit
                </Button>
              </Form>
            </React.Fragment>
          ) : (
            <Button
              color="primary"
              size="lg"
              block
              onClick={this.handleClickComment}
            >
              Click to comment
            </Button>
          )}
          {Object.keys(this.props.comments).length !== 0 ? (
            <CommonCommentList comments={this.props.comments} />
          ) : (
            ''
          )}
        </PaperSheet>
      </div>
    );
  }
}

const DivFull = styled.div`
  width: 1200px;
  right: 0px;
  top: 100px;
  height: 200px;
  background-color: lightgray;
`;

// export default Comment;
export default connect(
  state => ({
    storeInstructor: state.instructor
  }),
  dispatch => ({
    actionInstructor: bindActionCreators(instructorActions, dispatch)
  })
)(Comment);
