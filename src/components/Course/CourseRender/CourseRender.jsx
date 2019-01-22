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

import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { default as MaterialCard } from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const styles = theme => ({
  card: {
    display: 'flex',
    margin: 10
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto',
    width: 170
  },
  cover: {
    width: 59,
    margin: 5
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

const CourseRender = ({ classes, name, course, courses, review }) => {
  return (
    <React.Fragment>
      {name && (
        <CommonPaperSheet title={name}>
          <DivContainer>
            <MaterialCard className={classes.card}>
              {course && (
                <CardActionArea>
                  <CardMedia className={classes.media} image={course.image} />
                </CardActionArea>
              )}
            </MaterialCard>
          </DivContainer>
          {course &&
            course.courses.map(course => {
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

// export default CourseRender;
export default withStyles(styles)(CourseRender);
