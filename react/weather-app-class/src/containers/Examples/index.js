import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { useRouteMatch } from "react-router-dom";
// let { path, url } = useRouteMatch();

class Examples extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Examples page {this.props.ctr}
          </p>
          <button onClick={this.props.onAddCounter}>INCREMENT BY 10 | CURRENT VALUE: {this.props.ctr}</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddCounter: () => dispatch({ type: 'ADD_COUNTER', value: 10 })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Examples);
