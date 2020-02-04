import React, { useState } from 'react';
import './style.scss'

function WeatherForm () {
  const [count, setCount] = useState(0);

  const getWeather = (e) => {
    e.preventDefault();
    console.log('GET WEATHER')
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <form onSubmit={getWeather}>
        <input type="text"/>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  )
}

export default WeatherForm;
