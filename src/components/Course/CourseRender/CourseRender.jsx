import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import CommonPaperSheet from '../../common/PaperSheet/PaperSheet.jsx';
import { FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';

const CourseRender = ({ courses }) => {
  return (
    <React.Fragment>
      {courses &&
        courses.map(course => {
          return (
            <VerticalTimeline layout={'one-column'}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date=""
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaJsSquare />}
              >
                <h4 className="vertical-timeline-element-title">
                  {course.topic && course.topic}
                </h4>
                <h3 className="vertical-timeline-element-title">
                  {course.lecture && course.lecture.name}
                </h3>
                <h3 className="vertical-timeline-element-title">
                  {course.book && course.book.name}
                </h3>
                <CommonPaperSheet>{course.comment}</CommonPaperSheet>
              </VerticalTimelineElement>
            </VerticalTimeline>
          );
        })}
      <CommonPaperSheet title="Your New Course" />
    </React.Fragment>
  );
};

export default CourseRender;
