import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import remark from 'remark';
import remark2react from 'remark-react';
import styled from 'styled-components';

import http from '../../../services/httpService';
import { SERVER_URL } from '../../../services/httpService';

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
    const { type, name } = this.props;
    const apiEndpoint = `${SERVER_URL}/api/${type}/${name}`;
    console.log(apiEndpoint);

    console.log('[+] //////// user @ Comment = ', this.props);

    return http.post(apiEndpoint, {
      writer: this.props.user,
      content: this.state.text
    });
  };

  render() {
    console.log('[+] ////// ', this.props.comments);
    return (
      <div>
        <h1>Comment</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleText">Edit...</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Please share your thought. (Markdown syntax supported.)"
              style={{ height: 200 }}
              value={this.state.text}
              onChange={this.handleChange}
            />
            <Input
              color="primary"
              type="submit"
              value="Submit"
              style={{ color: 'blue' }}
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

        {this.props.comments.map((comment, index, comments) => {
          return (
            <ul>
              <li>{comment.content}</li>
              <li>{comment.writer}</li>
            </ul>
          );
        })}
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

export default Comment;
