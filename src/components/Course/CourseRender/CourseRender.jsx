import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import CommonCommentRender from '../../common/Comment/Render/Render.jsx';
import CommonPaperSheet from '../../common/PaperSheet/PaperSheet.jsx';
import { FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { red } from '@material-ui/core/colors/red';

const CourseRender = ({ name, courses, review }) => {
  return (
    <React.Fragment>
      {name && (
        <CommonPaperSheet title={name}>
          {courses &&
            courses.map(course => {
              return (
                <VerticalTimeline layout={'one-column'}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    iconStyle={{
                      background: 'rgb(33, 150, 243)',
                      color: '#fff'
                    }}
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
                    {course.comment && (
                      <CommonPaperSheet>{course.comment}</CommonPaperSheet>
                    )}
                  </VerticalTimelineElement>
                </VerticalTimeline>
              );
            })}
          {review && <CommonPaperSheet title="">{review}</CommonPaperSheet>}
        </CommonPaperSheet>
      )}
    </React.Fragment>
  );
};

export default CourseRender;
