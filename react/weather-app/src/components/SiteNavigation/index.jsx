import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css'

function SiteNavigation() {
  return (
    <nav className="site-navigation">
      <ul className="site-navigation__list">
        <li className="site-navigation__item">
          <NavLink exact to="/" activeClassName="site-navigation--active">Get Weather</NavLink>
        </li>

        <li className="site-navigation__item">
          <NavLink to="/about" activeClassName="site-navigation--active">About</NavLink>
        </li>

        <li className="site-navigation__item">
          <NavLink to="/examples" activeClassName="site-navigation--active">Examples</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SiteNavigation;
