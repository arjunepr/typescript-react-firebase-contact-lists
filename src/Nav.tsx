import * as React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Navigation = () => (
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
);