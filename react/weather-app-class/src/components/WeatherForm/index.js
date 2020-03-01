import React, { createRef, Component } from 'react';
import './style.scss'

class WeatherForm extends Component {
  constructor (props) {
    super(props);
    this.locationRef = createRef()
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const location = this.locationRef.current.value;
    this.props.onSearch(location);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref={this.locationRef}/>
          <button type="submit">Get Weather</button>
        </form>
      </div>
    )
  }
}

export default WeatherForm;
