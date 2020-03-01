import React, { Component } from 'react';
import WeatherForm from '@components/WeatherForm'
import WeatherMessage from '@components/WeatherMessage'

class Main extends Component {
  state = {
    weatherResult: ''
  }

  onSearch = () => {
    this.setState({weatherResult: 'This is Itaqua'})
  }

  render () {
    return (
      <div className="App">
        <WeatherForm onSearch={this.onSearch}/>
        <hr/>
        { this.state.weatherResult }
        <WeatherMessage />
      </div>
    )
  }
}

export default Main;
