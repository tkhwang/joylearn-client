import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Title extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  };

  render() {
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
  width: 90%;
  box-shadow: 2px 2px 2px 2px gray inset;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
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
  /* font-size: 5rem; */
  margin-left: 1rem;
`;

const TopicContents = styled.h3`
  /* font-size: 5rem; */
  margin-left: 1rem;
`;

const Button = styled.button`
  color: white;
  background-color: orange;
  margin: 1rem;
  max-width: 10rem;
`;

export default Title;
