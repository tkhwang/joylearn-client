import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import CommonCommentRender from '../../../components/common/Comment/Render/Render.jsx';
import http, { SERVER_URL } from '../../../services/httpService.js';

const styles = theme => ({
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
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

function CardList(props) {
  const {
    classes,
    theme,
    title,
    image,
    url,
    small,
    user,
    time,
    avatar
  } = props;

  return (
    <Card className={classes.card}>
      {image && (
        <CardMedia className={classes.cover} image={image} title={title} />
      )}
      {avatar && <img src={avatar} alt="avatar" width="50" height="50" />}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          {title && (
            <Typography component="h6" variant="h6">
              {title}
            </Typography>
          )}
          {url && (
            <Typography variant="subtitle1" color="textSecondary">
              <a href={url}>{url}</a>
            </Typography>
          )}
          {avatar && (
            <Typography variant="subtitle1" color="textSecondary">
              {user} @ {moment({ time }).fromNow()}
            </Typography>
          )}
          {small && (
            <Typography component="h6" variant="h6">
              {small}
            </Typography>
          )}
        </CardContent>
      </div>
    </Card>
  );
}

CardList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CardList);
