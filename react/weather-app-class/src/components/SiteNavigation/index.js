import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import './style.scss'

class SiteNavigation extends Component {
  render () {
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

          <li className="site-navigation__item">
            Number of counter is { this.props.ctr }
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
}

export default connect(mapStateToProps)(SiteNavigation);
