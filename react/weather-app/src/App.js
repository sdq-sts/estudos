import React from 'react';
import SiteNavigation from './components/SiteNavigation/'
import Main from './pages/Main'
import About from './pages/About'
import Examples from './pages/Examples'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
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
  );
}

export default App;
