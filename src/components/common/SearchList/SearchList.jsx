import React, { Component } from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import CommonCardList from '../../common/Card/CardList.jsx';
import CommonSearchListCard from '../../common/SearchList/SearchListCard.jsx';
import filterByInput from '../../../services/searchService.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActions from '../../../actions/signin';
import * as topicsActions from '../../../actions/topics';
import * as instructorActions from '../../../actions/instructor';
import * as bookActions from '../../../actions/book';
import * as courseActions from '../../../actions/course';

class SearchList extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);

    this.state = {
      valueTitle: '',
      courseUnit: 0,
      topics: [],
      course: []
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      topics: []
    });
  }

  handleChange = event => {
    this.setState(
      {
        valueTitle: event.target.value
      },
      () => {
        const { arrays } = this.props;
        // let topicSelected = topics.filter(topic => {
        //   return topic.name.indexOf(this.state.value) !== -1;
        let topicSelected = filterByInput(arrays, this.state.valueTitle);
        this.setState({
          ...this.state,
          topics: this.state.valueTitle ? topicSelected : []
        });
      }
    );
  };

  handleClick = event => {
    const { arrays } = this.props;
    const topicSelected = filterByInput(arrays, event.target.value);
    console.log('[+] /////////// SearchList : handleClick ', topicSelected);
    this.setState({
      ...this.state,
      topic: event.target.value,
      topics: filterByInput(arrays, event.target.valueTitle)
    });
  };

  handleCardClick = topic => {
    console.log('[+] handleCardClick', topic);
    const { arrays, actionCourse } = this.props;

    let course = {};
    course.topic = topic;
    course.courseUnit = this.state.courseUnit;
    actionCourse.set_course(course);

    this.setState({
      ...this.state,
      topic: topic,
      valueTitle: topic,
      courseUnit: this.state.courseUnit,
      topics: filterByInput(arrays, topic)
    });
  };

  handleSubmitClick() {}

  render() {
    const { title, arrays, courseUnit } = this.props;
    return (
      <React.Fragment>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>{title}</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="title"
            value={this.state.valueTitle}
            onChange={this.handleChange}
          />
        </InputGroup>
        {this.state.topics.map(array => {
          return (
            <CommonSearchListCard
              type=""
              title={array.name}
              image={array.logo}
              courseUnit={courseUnit}
              onClick={this.handleCardClick}
            />
          );
        })}
        <br />
      </React.Fragment>
    );
  }
}

// export default SearchList;
export default connect(
  state => ({
    storeSignin: state.signin,
    storeTopics: state.topics,
    storeInstructor: state.instructor,
    storeBook: state.book,
    stroeCourse: state.course
  }),
  dispatch => ({
    actionsSign: bindActionCreators(signinActions, dispatch),
    actionTopics: bindActionCreators(topicsActions, dispatch),
    actionInstructor: bindActionCreators(instructorActions, dispatch),
    actionBook: bindActionCreators(bookActions, dispatch),
    actionCourse: bindActionCreators(courseActions, dispatch)
  })
)(SearchList);
