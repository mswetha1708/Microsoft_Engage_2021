import './App.css';
import SignInOutContainer from './containers';
import React, { Component } from 'react';
import Dashboard from './components/Dashboard.js';
import SubmitAssignment from './components/Assignment.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Navbarr } from './components/Navbarr.js';

class App extends Component {
  render() {
    return (
          <Router>
            <Navbarr/>
            <Switch>
          <Route exact path="/dashboard" component = {Dashboard}/>
          <Route exact path="/" component = {SignInOutContainer}/>
          <Route exact path="/Assignment" component = {SubmitAssignment}/>
          </Switch>
          </Router>
    );
  }
}

export default App;

