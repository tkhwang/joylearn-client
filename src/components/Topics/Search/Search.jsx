import React, { Component } from 'react';
import styled from 'styled-components';

// topic search bar (로그인 했을 때 홈 화면에서)
// function보다 class를 써야 할 수 있다.
// input 태그 안에 함수를 설정해주는 경우 => 보기에는 편하지만 속도가 느려질 수 있다. (분리를 해주자)
class Search extends Component {
  state = {
    term: ''
  };

  render() {
    return (
      <DivBindedSearch>
        <H1TopicsTitle>
          Find the Best Programming Tutorials and Courses
        </H1TopicsTitle>
        <InputSearchBar
          type="text"
          autofocus
          placeholder="Search for the language you want to learn: Python, JavaScript..."
          onChange={event => this._onInputChange(event.target.value)}
        />
      </DivBindedSearch>
    );
  }

  _onInputChange = term => {
    this.setState({ term });
  };
}

const DivBindedSearch = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const H1TopicsTitle = styled.h1`
  font-size: 1.8rem;
`;

const InputSearchBar = styled.input`
  flex-basis: 2rem;
  height: 40px;
  margin: 20px;
  flex-shrink: 1;
`;

export default Search;
