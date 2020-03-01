import React, { Component } from 'react';
import SiteNavigation from './components/SiteNavigation'
import Main from './containers/Main'
import About from './containers/About'
import Examples from './containers/Examples'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render () {
    return (
      <Router>
        <SiteNavigation/>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/examples">
            <Examples />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
