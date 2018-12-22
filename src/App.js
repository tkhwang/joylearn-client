import React, { Component } from 'react';
import './App.css';
import config from './config';
const { SERVER_URL } = config();

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_NODE_ENV);

    return (
      <div className="App">
        <h1>Joy project</h1>
      </div>
    );
  }
}

export default App;
