# React

Anotações sobre o que eu aprendi sobre React.

**O que é react?**

React é um framework criado pelo Facebook em Javascript para criar interfaces em forma de componentes.

## Como criar um app em React

Para inicializar um app em React:

```js
ReactDOM.render(
  <div>Aqui é um componente</div>, // Componente JSX
  document.querySelector('#app') // Onde o componente vai ser renderizado
)
```

## Criando um componente

```js
// Componente
let MeuComponente = React.createClass({
  render: function() {
    return (
      <div>
      <p>Aqui também é um componente</p>
      </div>
    )
  }
})

// Renderizando componentes com JSX:
ReactDOM.render(
  <MeuComponente/>,
  document.querySelector('#app')
)
```

## Props

Para passar uma propriedade para ser usada pelo componente:

```js
// Componente
let MeuComponente = React.createClass({
  let name = this.props.name // Criando letiável para ser acessada no componente
  render: function() {
    return (
      <div>
      <p>Olá, {name}</p> // {name} acessa a propriedade name passada para o componente
      </div>
    )
  }  
})

// Renderizando componente
ReactDOM.render(
  <MeuComponente name="Sadraque"/>, // Prop 'name' passada com o valor 'Sadraque'
  document.querySelector('#app')
)
```

React tem um método para inserir propriedades padrão, o `getDefaultProps` e é usada da seguinte forma:

```js
let MeuComponente = React.createClass({
  getDefaultProps: function() { // Retorna um objeto
    return {
      name: 'Santos' // Se nenhuma propriedade 'name' seja passada, usará essa como padrão
    }
  },
  render: function() {
    let name = this.props.name
    return (
      <div>
      <p>Olá, {name}</p>
      </div>
    )
  }  
})
```

## State

Existem dois tipos de dados dentro de um componente, `props` e `state`.
`Props` é o dado que o componente recebe quando é renderizado e o componente não deve atualizá-lo.
Já `State` é mantido e atualizado pelo componente e tem dois métodos principais, `seteInitialState` e `setState`.

Criando um componente que é atualizado por `state`:

```js
let MeuComponente = React.createClass({

  getDefaultProps: function() {
    return {
      name: 'React'
    }
  },

  // Coloca um valor inicial no estado de name
  setInitialState: function() {
    return {
      name: this.props.name // Valor de estado inicial é props.name
    }
  },

  onButtonClick: function(e) {
    e.preventDefault() // Evita que a página seja recarregada com o envio do formulário

    // Quando esse método é executado, o valor de name mudará para o valor inserido
    // no formulário
    var nameRef = this.refs.name
    var name = nameRef.value
    nameRef.value = '' // Limpa os valores do input

    // Quando esse método é executado, muda o estado do 'name'
    // para o valor coletado do input 'name'
    if (typeof name === 'string' && name.length > 0) { // verifica se os dados são válidos
      this.setState({
        name: name
      })
    }
  },

  render: function() {
    // Em vez de usar this.props.name, usa-se this.state.name
    let name = this.state.name
    return (
      <div>
        <h1>Hello, {name}!</h1>

      // onSubmit indica que ao enviar o formulário, a o método 'onButtonClick' vai ser chamado
      <form onSubmit={this.onButtonClick}>
        <input type="text" ref="name"/> // Ref é uma referência de acesso
        <button>Muda nome</button> // Botão de envio
      </form>
      </div>
    )
  }

})
```

## Aninhando componentes

É possível aninhar componentes em React (claro) da seguinte forma:

```js
let PrimeiroComponente = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Primeiro Componente</h1>
      </div>
    )
  }
})

let SegundoComponente = React.createClass({
  render: function() {
    return (
      <div>
        <PrimeiroComponente/>
        <h1>Primeiro Componente</h1>
      </div>
    )
  }
})

ReactDOM.render(
  <SegundoComponente/>,
  document.querySelector('#app')
)
```
