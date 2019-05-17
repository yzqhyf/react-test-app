import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import './App.css';
import Button from './Button/Button';
import Form from './Form/Form';
import MouseTracker from './Mouse/MouseTracker';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/MouseTracker" component={MouseTracker} />
          </Switch>

          <NavLink to="/" exact activeClassName="">HOME</NavLink>
          <NavLink to="/MouseTracker" activeClassName="">MouseTracker</NavLink>
          <Button name="click me" />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
