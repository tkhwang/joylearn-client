import React, { Component } from 'react';
import styled from 'styled-components';

// import './TopicsSearch.css';

// topic search bar (로그인 했을 때 홈 화면에서)
// function보다 class를 써야 할 수 있다.
class TopicsSearch extends Component {
  render() {
    return (
      <Search>
        <h1>Find the Best Programming Tutorials and Courses</h1>
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
`;

const SearchBar = styled.input`
  width: 1000px;
  height: 40px;
`;

export default TopicsSearch;
