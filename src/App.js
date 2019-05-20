import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import './App.css';
import Button from './components/Button/Button';
import Form from './components/Form/Form';
import MouseTracker from './components/Mouse/MouseTracker';
import Stream from './components/Stream/Stream';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/MouseTracker" component={MouseTracker} />
            <Route path="/Stream" component={Stream} />
          </Switch>

          <NavLink to="/" exact activeClassName="">HOME</NavLink>
          <NavLink to="/MouseTracker" activeClassName="">MouseTracker</NavLink>
          <NavLink to="/Stream" activeClassName="">Stream</NavLink>
          <Button name="click me" />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
