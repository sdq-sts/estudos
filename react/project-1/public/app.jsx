const GreeterMessage = React.createClass({
  displayName: 'GreeterMessage',
  getDefaultProps () {
    return {
      name: 'React'
    }
  },
  render () {
    const name = this.props.name;

    return (
      <h1>Hello, { name }</h1>
    )
  }
})

const GreeterForm = React.createClass({
  displayName: 'GreeterForm',

  onFormSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;

    if (name) {
      this.props.onNewName(name)
    }
  },

  render () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button type="submit">Set name</button>
      </form>
    )
  }
})

const Greeter = React.createClass({
  displayName: 'Greeter',
  getInitialState () {
    return {
      name: 'React'
    }
  },
  handleNewName(name) {
    this.setState({ name });
  },
  render () {
    const name = this.state.name;

    return (
      <div>
        <GreeterMessage name={name}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    )
  }
});

const firstname = 'Sadraque'

ReactDOM.render(
  <Greeter name={firstname}/>,
  document.getElementById('app')
)
