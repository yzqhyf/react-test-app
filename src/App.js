import React, { Component } from 'react';
import './App.css';
import Button from './Button/Button';
import Form from './Form/Form';

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
