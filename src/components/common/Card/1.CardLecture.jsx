import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    // maxWidth: 345
    maxWidth: 600
  },
  media: {
    // height: 140
    maxHeight: 300
  }
};

class CardLecture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log('이건 카드에서', this.props);
    const { classes, name, image, lang, free, url } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia classNmae={classes.media} image={image} name={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            {/* <Typography component="p">{lang}</Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

// function MediaCard(props) {
//   const { classes } = props;
//   return (

//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           // image={this.props.image}
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             이건 또 뭐임?
//           </Typography>
//           <Typography component="p">이게 뭐임?</Typography>
//         </CardContent>
//       </CardActionArea>
//       {/* <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions> */}
//     </Card>

//   );
// }

// MediaCard.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// const CardContainer = styled.div`
//   display: flex;
//   flex: row;
// `;

export default withStyles(styles)(CardLecture);
