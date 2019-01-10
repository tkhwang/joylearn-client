import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MaterialIcon /*, { colorPalette }*/ from 'material-icons-react';
import { Redirect } from 'react-router';

const styles = {
  card: {
    width: 250,
    margin: 10
  },
  media: {
    height: 100
  }
};

class CardTopic extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  // <Redirect to={`/topic?topic=${title}`} />

  render() {
    const { classes, image, title } = this.props;
    return (
      <div onClick={this.handleClick}>
        {this.state.clicked ? (
          <Redirect to={`/j/${title}`} />
        ) : (
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={image}
                title={title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography component="p">
                  <MaterialIcon icon="verified_user" />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </div>
    );
  }
}

CardTopic.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardTopic);
