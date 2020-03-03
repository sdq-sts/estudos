import React, { Component } from 'react';

class NameList extends Component {
  state = {
    name: 'Sadraque',
    persons: [
      { name: 'Michael', age: 12},
      { name: 'Mary', age: 36 }
    ]
  }

  nameListHandler = () => {
    this.setState({
      persons: this.state.persons.reverse()
    })

    console.log('Botão clicado!')
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render () {
    return (
      <>
        { this.state.persons.map((p, i) => <p key={i}>My name is {p.name}</p>) }
        <button onClick={ this.nameListHandler }>Click</button>
        <h1>Here my name is { this.state.name.trim() || 'Sadraque' }</h1>
        <input onChange={this.changeName} value={this.state.name}/>
      </>
    )
  }
}

export default NameList;
