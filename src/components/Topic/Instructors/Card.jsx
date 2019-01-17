import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { default as MaterialCard } from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import MaterialIcon, { colorPalette } from 'material-icons-react';

import urlencode from 'urlencode';
import { Redirect } from 'react-router';

const styles = {
  card: {
    // width: 250,
    width: 350,
    margin: 10
  },
  media: {
    height: 300
  }
};

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('[+] TopicInstructorsCard : this = ', this.props.name);
    this.setState({
      clicked: true
    });
  }

  renderPage() {
    const { classes } = this.props;
    const { fullName, name, gitHub, mainUrl, image } = this.props.instructor;
    return (
      <div onClick={this.handleClick}>
        {this.state.clicked ? (
          <Redirect to={`/instructor/${urlencode(name)}`} />
        ) : (
          <MaterialCard className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media} image={image} name={name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {fullName === undefined ? name : fullName}
                </Typography>
                {gitHub && <Typography component="p">{gitHub}</Typography>}
                {/* <Typography component="p">{url}</Typography> */}
              </CardContent>
            </CardActionArea>
          </MaterialCard>
        )}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.instructor && this.renderPage()}
      </React.Fragment>
    );
  }
}

Card.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Card);
