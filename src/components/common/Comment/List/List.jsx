import React, { Component } from 'react';
import styled from 'styled-components';

import CommonCommentRender from '../../../common/Comment/Render/Render';
import CommonCommentList from '../../../common/Comment/List/List.jsx';
import CommonPaperSheet from '../../../common/PaperSheet/PaperSheet.jsx';
import moment from 'moment';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import http, { SERVER_URL } from '../../../../services/httpService.js';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { avatar: '' };
  }

  async componentDidMount() {
    const apiEndpoint = `${SERVER_URL}/api/users/${this.props.user}`;
    const { avatar } = await http.get(apiEndpoint);
    console.log('[+] ///////////// avatar = ', avatar);

    this.setState({
      ...this.state,
      avatar: avatar
    });
  }

  render() {
    const { classes, comments, user, url, updated_at } = this.props;
    const time = moment({ updated_at }).fromNow();
    // const avatar = '';

    return (
      <React.Fragment>
        {/* <CommonCommentList title={comments.content} image="" url="" /> */}

        <Card className={classes.card}>
          <img src={this.state.avatar} alt="avatar" width="30" height="30" />
          {user}
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
                <CommonCommentRender comments={comments} />
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user}@{time}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <a href={url}>{url}</a>
              </Typography>
            </CardContent>
          </div>
        </Card>
      </React.Fragment>
    );
  }
}

const DivFull = styled.div`
  width: 1200px;
  right: 0px;
  top: 100px;
  height: 200px;
  background-color: lightgray;
`;

export default List;
