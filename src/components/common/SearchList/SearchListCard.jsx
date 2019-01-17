import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

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

import CommonCommentRender from '../Comment/Render/Render.jsx';
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

class SearchListCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    console.log('[+] SearchListCard : ', this, e.target.value);

    this.props.onClick(this.props.title);
  };

  render() {
    const { props } = this;

    const { classes, theme, title, image } = props;

    return (
      <React.Fragment>
        <Card className={classes.card} onClick={this.handleClick}>
          {image && <CardMedia className={classes.cover} image={image} />}
          <div className={classes.details}>
            <CardContent className={classes.content}>
              {title && (
                <Typography component="h6" variant="h6">
                  {title}
                </Typography>
              )}
            </CardContent>
          </div>
        </Card>
      </React.Fragment>
    );
  }
}

SearchListCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SearchListCard);
