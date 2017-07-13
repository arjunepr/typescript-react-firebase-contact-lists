import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import ContactList from './ContactList';
import About from './About';

export default () => (
  <Router>
    <div>
      <nav className="pure-header content">
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
      </nav>

      <Switch>
        <Route exact path='/' component={ContactList}></Route>
        <Route path='/about' component={About}></Route>
        <Route></Route>
      </Switch>
    </div>
  </Router>
);