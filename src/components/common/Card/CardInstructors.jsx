import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import MaterialIcon /*, { colorPalette }*/ from 'material-icons-react';
import { Redirect } from 'react-router';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = {
  card: {
    width: 600,
    margin: 10
  },
  media: {
    height: 100
  }
};

class CardInstructors extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState({
      clicked: true
    });
    console.log(name);
  }

  // <Redirect to={`/topic?topic=${title}`} />

  render() {
    console.log(this.state.clicked);
    const { classes, image, name } = this.props;
    return (
      <Card className={classes.card} onClick={() => this.handleClick(name)}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="Add"
            className={classes.margin}
          >
            <NavigationIcon className={classes.extendedIcon} />
            Recommend
          </Fab>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

CardInstructors.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardInstructors);
