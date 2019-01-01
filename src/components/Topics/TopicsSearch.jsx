import React, { Component } from 'react';

import './TopicsSearch.css';
// topic search bar (로그인 했을 때 홈 화면에서)
class TopicsSearch extends Component {
  render() {
    return (
      <div className="search">
        <h1>Find the Best Programming Tutorials and Courses</h1>
        <input
          className="searchbar"
          type="text"
          autofocus
          placeholder="Search for the language you want to learn: Python, JavaScript..."
        />
      </div>
    );
  }
}

export default TopicsSearch;
