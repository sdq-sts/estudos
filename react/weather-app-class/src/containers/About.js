import React, { Component } from 'react';
import NameList from '@components/NameList'

class About extends Component {
  render () {
    return (
      <div className="App">
      <header className="App-header">
        <div>
          <NameList/>
        </div>
      </header>
    </div>
    )
  }
}

export default About;
