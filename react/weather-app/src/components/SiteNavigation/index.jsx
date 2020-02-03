import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

function SiteNavigation() {
  return (
    <nav className="site-navigation">
      <ul className="site-navigation__list">
        <li className="site-navigation__item">
          <Link to="/" >Get Weather</Link>
        </li>

        <li className="site-navigation__item">
          <Link to="/about" >About</Link>
        </li>

        <li className="site-navigation__item">
          <Link to="/examples" >Examples</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SiteNavigation;
