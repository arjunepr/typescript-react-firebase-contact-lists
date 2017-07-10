import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/'></Route>
      <Route exact path='/about'></Route>
      <Route></Route>
    </Switch>
  </Router>
);