import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PaperSheet from '../../common/PaperSheet/PaperSheet';

import CourseRender from '../CourseRender/CourseRender.jsx';
import { withStyles } from '@material-ui/core/styles';
import { default as MaterialCard } from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const CourseCardInner = ({ course }) => {
  return (
    <ul>
      <li>course.name</li>
    </ul>
  );
};

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

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes, course } = this.props;
    console.log('[+] /////  CourseCard = ', course);

    return (
      <React.Fragment>
        {course && (
          <div>
            <CourseRender name={course.name} course={course} review="" />
            <PaperSheet title={course.name}>
              <DivContainer>
                <MaterialCard className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={course.image} />
                  </CardActionArea>
                </MaterialCard>
                <CourseCardInner course={course} />
              </DivContainer>
            </PaperSheet>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Card.propTypes = {
  classes: PropTypes.object.isRequired
};

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default withStyles(styles)(Card);
