import React, { Component } from 'react';
import './style.scss'

class WeatherForm extends Component {
  getWeather(e) {
    e.preventDefault();
    console.log('GET WEATHER')
  }

  render () {
    return (
      <div>
        <form onSubmit={this.getWeather}>
          <input type="text"/>
          <button type="submit">Get Weather</button>
        </form>
      </div>
    )
  }
}

export default WeatherForm;
