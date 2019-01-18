import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isClicked: false };
  }

  handleClick = e => {
    const { type } = this.props;
    if (type === 'instructor' || type === 'lecture' || type === 'book') {
      this.setState({
        isClicked: true
      });
    }
  };

  render() {
    const { props } = this;

    const {
      classes,
      title,
      type,
      image,
      url,
      small,
      user,
      time,
      avatar,
      review
    } = props;

    return (
      <React.Fragment>
        {this.state.isClicked ? (
          <Redirect to={`/${type}/${title}`} />
        ) : (
          <Card className={classes.card} onClick={this.handleClick}>
            {image && (
              <CardMedia
                className={classes.cover}
                image={image}
                title={title}
              />
            )}
            {avatar && <img src={avatar} alt="avatar" width="50" height="50" />}
            <div className={classes.details}>
              <CardContent className={classes.content}>
                {review && (
                  <Typography component="h6" variant="h6">
                    {review}
                  </Typography>
                )}
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
        )}
      </React.Fragment>
    );
  }
}

CardList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CardList);
