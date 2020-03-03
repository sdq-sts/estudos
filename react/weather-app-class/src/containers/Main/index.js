import React, { Component } from 'react';
import WeatherForm from '@components/WeatherForm';
import WeatherMessage from '@components/WeatherMessage';
import { connect } from 'react-redux';

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

        <button onClick={this.props.onIncrementCounter}>INCREMENT COUNTER BY 1</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INC_COUNTER' })
  }
}

export default connect(null, mapDispatchToProps)(Main);
