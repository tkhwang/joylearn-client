import React, { Component } from 'react';
import styled from 'styled-components';

// import './TopicsSearch.css';

// topic search bar (로그인 했을 때 홈 화면에서)
// function보다 class를 써야 할 수 있다.
class TopicsSearch extends Component {
  render() {
    return (
      <Search>
        <TopicsTitle>
          Find the Best Programming Tutorials and Courses
        </TopicsTitle>
        <SearchBar
          type="text"
          autofocus
          placeholder="Search for the language you want to learn: Python, JavaScript..."
        />
      </Search>
    );
  }
}

const Search = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const TopicsTitle = styled.h1`
  font-size: 1.8rem;
`;

const SearchBar = styled.input`
  flex-basis: 2rem;
  height: 40px;
  margin: 20px;
  flex-shrink: 1;
`;

export default TopicsSearch;
