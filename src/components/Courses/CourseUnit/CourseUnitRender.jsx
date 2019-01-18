import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import CommonPaperSheet from '../../common/PaperSheet/PaperSheet.jsx';
import { FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';

const CourseUnitRender = ({ topic, lecture, book, comment }) => {
  return (
    <CommonPaperSheet title="One-COlumn">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaJsSquare />}
        >
          <h4 className="vertical-timeline-element-title">{topic}</h4>
          {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
          <p>{lecture}</p>
          <p>{book}</p>
          <p>{comment} </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </CommonPaperSheet>
  );
};

export default CourseUnitRender;
