import React, { Component } from 'react';

import { KEY_USER } from '../../services/authService';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: ''
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem(KEY_USER));
    this.setState({
      ...this.state,
      avatar: user.avatar
    });
  }
  render(props) {
    const { width, height } = this.props;
    return (
      <img
        src={
          this.state.avatar
            ? this.state.avatar
            : 'https://s3.ap-northeast-2.amazonaws.com/joy-learn-image/avatar/9205abe37b860fdec767a3123566b573'
        }
        alt="avatar"
        width={width}
        height={height}
      />
    );
  }
}

export default Avatar;
