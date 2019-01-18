import React from 'react';
import {
  Input,
  Button,
  FormGroup,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

import http from '../../../services/httpService';
import { SERVER_URL } from '../../../services/httpService';

class RecommendButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,

      instructor: {
        name: '',
        fullName: '',
        gitHub: '',
        mainUrl: '',
        image: '',
        lang: 'eng'
      },
      lecture: {
        name: '',
        url: '',
        image: '',
        free: 'Free',
        lang: 'eng'
      },
      book: {
        name: '',
        url: '',
        image: '',
        free: 'Free',
        lang: 'eng'
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.submitClick = this.submitClick.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  handleClick = e => {
    this.setState(prevState => ({
      ...this.state,
      clicked: !prevState.clicked
    }));
  };

  submitClick = async e => {
    const { instructor, lecture, book } = this.state;
    const { topic } = this.props;

    if (instructor.name.length !== 0) {
      const apiEndpoint = `${SERVER_URL}/instructor`;
      const data = {
        instructor: {
          ...this.state.instructor,
          topic: topic.name
        }
      };
      await http.post(apiEndpoint, data);
    } else if (lecture.name.length !== 0) {
      const apiEndpoint = `${SERVER_URL}/lecture`;
      const data = {
        lecture: {
          ...this.state.lecture,
          free: this.state.lecture.free === 'Free' ? true : false,
          topic: topic.name
        }
      };
      await http.post(apiEndpoint, data);
    } else if (book.name.length !== 0) {
      const apiEndpoint = `${SERVER_URL}/book`;
      const data = {
        book: {
          ...this.state.book,
          free: this.state.book.free === 'Free' ? true : false,
          topic: topic.name
        }
      };
      await http.post(apiEndpoint, data);
    }
  };

  submitChange = e => {
    const { type } = this.props;

    if (type === 'instructor') {
      this.setState({
        ...this.state,
        instructor: {
          ...this.state.instructor,
          [e.target.name]: e.target.value
        }
      });
    } else if (type === 'lecture') {
      this.setState({
        ...this.state,
        lecture: {
          ...this.state.lecture,
          [e.target.name]: e.target.value
        }
      });
    } else if (type === 'book') {
      this.setState({
        ...this.state,
        book: {
          ...this.state.book,
          [e.target.name]: e.target.value
        }
      });
    }
  };

  render() {
    const { instructor, lecture, book } = this.props;
    return (
      <React.Fragment>
        {this.state.clicked ? (
          <React.Fragment>
            <Button
              color="secondary"
              size="lg"
              block
              onClick={this.handleClick}
            >
              {`Submit New ${
                instructor ? instructor : lecture ? lecture : book && book
              }`}
            </Button>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Name </InputGroupAddon>
                <Input
                  placeholder={
                    instructor
                      ? "Instructor's name"
                      : lecture
                      ? "Lecture's name"
                      : book && "Book's name"
                  }
                  name={'name'}
                  value={
                    instructor
                      ? this.state.instructor.name
                      : lecture
                      ? this.state.lecture.name
                      : book && this.state.book.name
                  }
                  onChange={this.submitChange}
                />
              </InputGroup>

              {instructor && (
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    Full Name
                  </InputGroupAddon>
                  <Input
                    placeholder={"Instructor's Full Name"}
                    name={'fullName'}
                    value={this.state.instructor.fullName}
                    onChange={this.submitChange}
                  />
                </InputGroup>
              )}

              {instructor && (
                <InputGroup>
                  <InputGroupAddon addonType="prepend">GitHub</InputGroupAddon>
                  <Input
                    placeholder={"Instructor's GitHub URL"}
                    name={'gitHub'}
                    value={this.state.instructor.gitHub}
                    onChange={this.submitChange}
                  />
                </InputGroup>
              )}

              <InputGroup>
                <InputGroupAddon addonType="prepend">URL</InputGroupAddon>
                <Input
                  placeholder={
                    instructor
                      ? "Instructor's url"
                      : lecture
                      ? "Lecture's url"
                      : book && "Book's url"
                  }
                  name={instructor ? 'mainUrl' : 'url'}
                  value={
                    instructor
                      ? this.state.instructor.mainUrl
                      : lecture
                      ? this.state.lecture.url
                      : book && this.state.book.url
                  }
                  onChange={this.submitChange}
                />
              </InputGroup>

              {/* image 보류 */}
              {/* <InputGroup>
                <InputGroupAddon addonType="prepend">Image</InputGroupAddon>
                <Input
                  placeholder={
                    instructor
                      ? "Instructor's image url"
                      : lecture
                      ? "Lecture's image url"
                      : book && "Book's image url"
                  }
                />
              </InputGroup> */}

              {lecture && (
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    Free / Paid
                  </InputGroupAddon>
                  <Input
                    type="select"
                    bsSize="lg"
                    name={'free'}
                    value={this.state.lecture.free}
                    onChange={this.submitChange}
                  >
                    <option>Free</option>
                    <option>Paid</option>
                  </Input>
                </InputGroup>
              )}

              {book && (
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    Free / Paid
                  </InputGroupAddon>
                  <Input
                    type="select"
                    bsSize="lg"
                    name={'free'}
                    value={this.state.book.free}
                    onChange={this.submitChange}
                  >
                    <option>Free</option>
                    <option>Paid</option>
                  </Input>
                </InputGroup>
              )}

              <InputGroup>
                <InputGroupAddon addonType="prepend">Language</InputGroupAddon>
                <Input
                  type="select"
                  bsSize="lg"
                  onChange={this.submitChange}
                  name={'lang'}
                  value={
                    instructor
                      ? this.state.instructor.lang
                      : lecture
                      ? this.state.lecture.lang
                      : book && this.state.book.lang
                  }
                >
                  <option>eng</option>
                  <option>kor</option>
                </Input>
              </InputGroup>

              <Button
                color="primary"
                size="lg"
                block
                onClick={this.submitClick}
              >
                Submit
              </Button>
            </FormGroup>
          </React.Fragment>
        ) : (
          <Button color="primary" size="lg" block onClick={this.handleClick}>
            {`Submit New ${
              instructor ? instructor : lecture ? lecture : book && book
            }`}
          </Button>
        )}
      </React.Fragment>
    );
  }
}

export default RecommendButton;
