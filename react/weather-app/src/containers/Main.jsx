import React from 'react';
import WeatherForm from '../components/WeatherForm'
import WeatherMessage from '../components/WeatherMessage'

function Main() {

  return (
    <div className="App">
      <WeatherForm />
      <hr/>
      <WeatherMessage />
    </div>
  );
}

export default Main;
