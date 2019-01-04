import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// import './Title.css';

class Title extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  };

  render() {
    console.log(this.props);
    return (
      <Container>
        <Topic>
          <TopicLogo image={this.props.title.logo} />
          <TopicChildren>
            <TopicTitle>{this.props.title.name}</TopicTitle>
            <TopicContents>{`${
              this.props.title.name
            } Tutorials and Courses`}</TopicContents>
            <Button>+ Follow</Button>
          </TopicChildren>
        </Topic>
      </Container>
    );
  }
}

const TopicLogo = ({ image }) => {
  return <LogoImage src={image} alt="Selected Topic Logo" />;
};

TopicLogo.propTypes = {
  image: PropTypes.string.isRequired
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Topic = styled.div`
  display: flex;
  border: 1px solid black;
  width: 90%;
`;

const TopicChildren = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImage = styled.img`
  max-width: 10rem;
  max-height: 10rem;
`;

const TopicTitle = styled.h1`
  fonst-size: 5rem;
  margin-left: 1rem;
`;

const TopicContents = styled.h3`
  fonst-size: 5rem;
  margin-left: 1rem;
`;

const Button = styled.button`
  color: white;
  background-color: orange;
  margin: 1rem;
  max-width: 10rem;
`;

export default Title;
