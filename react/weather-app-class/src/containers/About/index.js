import React, { Component } from 'react';
import NameList from '@components/NameList'
import { connect } from 'react-redux';

class About extends Component {
  render () {
    return (
      <div className="App">
      <header className="App-header">
        <div>
          <NameList/>
        </div>
      </header>
      <hr/>
      <ul>
        { this.props.results.map((e, i) => <li key={i}>{e}</li>) }
      </ul>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    results: state.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onAddCounter: () => dispatch({ type: 'ADD_COUNTER', value: 10 }),
    // onStoreResult: () => dispatch({ type: 'STORE_RESULT',  }),
    // onDeleteResult: () => dispatch({ type: 'DELETE_RESULT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
