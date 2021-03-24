import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ backgroundColor: "#cc9900", padding: "20px 20px"}}>
        <PostForm />
        </div>
        <div style={{ backgroundColor: "#ffdf80", padding: "20px 20px"}}>
        <PostList />
        </div>
      </div>
    );
  }
}

export default App;
