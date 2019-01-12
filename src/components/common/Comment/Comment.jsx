import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import remark from 'remark';
import remark2react from 'remark-react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as instructorActions from '../../../actions/instructor';

import http from '../../../services/httpService';
import { SERVER_URL } from '../../../services/httpService';
import CommonCommentList from '../../../components/common/Comment/List/List.jsx';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

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
        <h1>Comment</h1>
        {Object.keys(this.props.comments).length !== 0 ? (
          <CommonCommentList comments={this.props.comments} />
        ) : (
          'nothing'
        )}
        <h4>Share your comment/wisdom...</h4>
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
            <Button color="primary" size="lg" block onClick={this.handleClick}>
              Submit
            </Button>
          </FormGroup>
        </Form>
        <Label for="exampleText">It will be displayed when submited.</Label>
        <DivFull>
          {
            remark()
              .use(remark2react)
              .processSync(this.state.text).contents
          }
        </DivFull>
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
