import * as React from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import ContactList from './ContactList';

export default () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink to={'/'}>
            Contact List
          </NavLink>
        </li>
      
        <li>
          <NavLink to={'/about'}>
            About
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path='/' component={ContactList}></Route>
        <Route path='/about'></Route>
        <Route></Route>
      </Switch>
    </div>
  </Router>
);