import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Button name="click me" />
      </div>
    );
  }
}
export default App;
