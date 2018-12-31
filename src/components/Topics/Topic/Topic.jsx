import React, { Component } from 'react';

import TopicTitle from './TopicTitle';
import TopicInstructors from './TopicInstructors';
import TopicLectures from './TopicLectures';
import TopicCourses from './TopicCourses';

// selected topic 
class Topic extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render(){
    return(
      <React.Fragment>
        <TopicTitle title={this.props.topic.title} />
        <TopicInstructors instructors={this.props.topic.instructors}/>
        <TopicLectures lectures={this.props.topic.lectures}/>
        <TopicCourses courses={this.props.topic.courses}/>
      </React.Fragment>
    )
  }
}

export default Topic;
