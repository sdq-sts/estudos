import React, { Component } from 'react';

class NameList extends Component {
  state = {
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

  render () {
    return (
      <>
        {this.state.persons.map((p, i) => <p key={i}>My name is {p.name}</p>)}
        <button onClick={this.nameListHandler}>Click</button>
      </>
    )
  }
}

export default NameList;
