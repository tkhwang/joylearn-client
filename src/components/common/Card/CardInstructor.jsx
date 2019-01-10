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
// import MaterialIcon, { colorPalette } from 'material-icons-react';
import { Redirect } from 'react-router';

const styles = {
  card: {
    width: 250,
    margin: 10
  },
  media: {
    height: 300
  }
};

class CardInstructor extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('[+] CardTopics : this = ', this.props.title);
    this.setState({
      clicked: true
    });
  }

  // <Redirect to={`/topic?topic=${title}`} />

  render() {
    const { classes, image, title, description } = this.props;
    return (
      <div onClick={this.handleClick}>
        {this.state.clicked ? (
          <Redirect to={`/instructor/${title}`} />
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
                <Typography component="p">{description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </div>
    );
  }
}

CardInstructor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardInstructor);
