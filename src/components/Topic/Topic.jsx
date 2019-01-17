import React, { Component } from 'react';
import styled from 'styled-components';
import http from '../../services/httpService';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
// import Spinner from '../common/Spinner/Spinner';

import CommonCardList from '../common/Card/CardList.jsx';
import PaperSheet from '../common/PaperSheet/PaperSheet.jsx';
import Emoji from '../common/Emoji';
import * as signinActions from '../../actions/signin';
import * as topicsActions from '../../actions/topics';

import Title from '../common/Title/Title';
import InstructorsCard from '../Topic/Instructors/Card';
import LecturesCard from '../Topic/Lectures/Card';
import BooksCard from '../Topic/Books/Card';
// import Courses from './Courses/Courses';

import config from '../../config';
const { SERVER_URL } = config();

// selected topic
class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: {},
      instructors: [],
      lectures: [],
      books: [],
      courses: [],
      selectedInstructors: [],
      selectedLectures: [],
      selectedBooks: []
    };
  }

  async componentDidMount() {
    const { topic } = this.props.topic.match.params;

    this.setState({
      ...this.state,
      topic: topic
    });

    const { topics } = this.props.storeTopics;

    const selectedTopic = topics.filter(obj => {
      return obj.name === topic;
    })[0];
    this.setState({ ...this.state, topic: selectedTopic });

    const { data } = await http.get(`${SERVER_URL}/t/${topic}`);

    console.log('did : ', data);

    this.setState({
      ...this.state,
      instructors: data.instructors,
      lectures: data.lectures,
      books: data.books
    });

    const selectedInstructors = [];
    const selectedLectures = [];
    const selectedBooks = [];

    const sortedInstructors = data.instructors.sort((a, b) => {
      if (a.review < b.review) {
        return 1;
      }
      if (a.review > b.review) {
        return -1;
      }
      return 0;
    });

    const sortedLectures = data.lectures.sort((a, b) => {
      if (a.review < b.review) {
        return 1;
      }
      if (a.review > b.review) {
        return -1;
      }
      return 0;
    });

    const sortedBooks = data.books.sort((a, b) => {
      if (a.review < b.review) {
        return 1;
      }
      if (a.review > b.review) {
        return -1;
      }
      return 0;
    });

    for (let i = 0; i < 3; i++) {
      selectedInstructors.push(sortedInstructors[i]);
      selectedLectures.push(sortedLectures[i]);
      selectedBooks.push(sortedBooks[i]);
    }

    console.log('selectedInstructors : ', selectedInstructors);
    console.log('selectedLectures : ', selectedLectures);
    console.log('selectedBooks : ', selectedBooks);

    this.setState({
      ...this.state,
      selectedInstructors: selectedInstructors,
      selectedLectures: selectedLectures,
      selectedBooks: selectedBooks
    });
  }

  _renderTopic = () => {
    // const avatar = localStorage.getItem('avatar');
    return (
      <React.Fragment>
        <PaperSheet
          title={
            // <Link to={`/i/${this.state.topic.name}`}>
            <h3>
              Instructors <Emoji symbol="🎓" label="smile" />
            </h3>
            // </Link>
          }
        >
          <CardsContatiner>
            {this.state.selectedInstructors.map(instructor => {
              return (
                <InstructorsCard
                  instructor={instructor}
                  // fullName={instructor.fullName}
                  // name={instructor.name}
                  // git={instructor.gitHub}
                  // url={instructor.mainUrl}
                  // image={instructor.image}
                  // lang={instructor.lang}
                  // key={instructor.name}
                />
              );
            })}
          </CardsContatiner>

          <PaperSheet title="More Instructors">
            {this.state.instructors.map(instructor => {
              return (
                <CommonCardList
                  type="instructor"
                  title={instructor.name}
                  url={instructor.mainUrl}
                  image={instructor.image}
                  time=""
                  review={instructor.review}
                />
              );
            })}
          </PaperSheet>
        </PaperSheet>

        <PaperSheet
          title={
            // <Link to={`/l/${this.state.topic.name}`}>
            <h3>
              Lectures <Emoji symbol="📘" label="smile" />
            </h3>
            // </Link>
          }
        >
          <CardsContatiner>
            {this.state.selectedLectures.map(lecture => {
              return (
                <LecturesCard
                  lecture={lecture}
                  // name={lecture.name}
                  // image={lecture.screenshot}
                  // url={lecture.url}
                  // lang={lecture.lang}
                  // free={lecture.free}
                />
              );
            })}
          </CardsContatiner>

          <PaperSheet title="More Lectures">
            {this.state.lectures.map(lecture => {
              return (
                <CommonCardList
                  type="lecture"
                  title={lecture.name}
                  url={lecture.url}
                  image={lecture.screenshot}
                  time=""
                  review={lecture.review}
                />
              );
            })}
          </PaperSheet>
        </PaperSheet>

        <PaperSheet
          title={
            // <Link to={`/b/${this.state.topic.name}`}>
            <h3>
              Books <Emoji symbol="📘" label="smile" />
            </h3>
            // </Link>
          }
        >
          <CardsContatiner>
            {this.state.selectedBooks.map(book => {
              return (
                <BooksCard
                  book={book}
                  // name={book.name}
                  // image={book.screenshot}
                  // url={book.url}
                  // lang={book.lang}
                  // free={book.free}
                />
              );
            })}
          </CardsContatiner>

          <PaperSheet title="More Books">
            {this.state.books.map(book => {
              return (
                <CommonCardList
                  type="book"
                  title={book.name}
                  url={book.url}
                  image={book.screenshot}
                  time=""
                  review={book.review}
                />
              );
            })}
          </PaperSheet>
        </PaperSheet>

        <PaperSheet
          title={
            <Link to={`/c/${this.state.topic.name}`}>
              <h3>
                Courses <Emoji symbol="📘" label="smile" />
              </h3>
            </Link>
          }
        />
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Title title={this.state.topic} />

        <hr />

        {this.state.instructors && this.state.lectures ? (
          this._renderTopic()
        ) : (
          <DivSpinner>
            <Loader type="Triangle" color="#00BFFF" height="200" width="200" />
          </DivSpinner>
          // <Spinner />
        )}
      </React.Fragment>
    );
  }
}

const CardsContatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 30px 30px 30px 30px;
`;
// flex-direction: row

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
    actionsSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch)
  })
)(Topic);
