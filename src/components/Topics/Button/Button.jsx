import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
// import Topic from '';

class Button extends Component {
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

  render() {
    return this.state.clicked ? (
      // <NavLink className="nav-item nav-link" to="/topic">
      //   Topic
      // </NavLink>
      <Redirect to={`/topic?topic=${this.props.name}`} />
    ) : (
      <Topics onClick={() => this.handleClick(this.props.name)}>
        <TopicsLogo image={this.props.logo} />
        <TopicsTitle className="topics-title">{this.props.name}</TopicsTitle>
      </Topics>
    );
  }
}

function TopicsLogo({ image }) {
  return <Img src={image} alt="Topic Logo" />;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

TopicsLogo.propTypes = {
  image: PropTypes.string.isRequired
};

const Topics = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  border: solid 1px gray;
  margin: 10px;
  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 3px 5px #ced6e0;
  }
`;

const TopicsTitle = styled.h1`
  font-size: 1.3rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;

const Img = styled.img`
  max-width: 2.7rem;
  max-height: 2.7rem;
  margin: 3px;
`;

export default Button;
