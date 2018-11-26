# Arrow functions

Arrow functions anexam `this` à função.

**Função anônima normal**
```js
let names = ['Andrew', 'Julie', 'Jen']

let person = {
  name: 'Sadraque',
  greet: function () {
    names.forEach(function(x) {
      console.log(this.name + ' diz olá para ' + x)
    })
  }
}

person.greet()
// undefined diz olá para Andrew
// undefined diz olá para Julie
// undefined diz olá para Jen
```

**Com arrow function**
```js
let names = ['Andrew', 'Julie', 'Jen']

let person = {
  name: 'Sadraque',
  greet: function () {
    names.forEach((x) => console.log(this.name + ' diz olá para ' + x))
  }
}

person.greeter()
// Sadraque diz olá para Andrew
// Sadraque diz olá para Julie
// Sadraque diz olá para Jen
```

A vantagem de poder definir tudo em uma linha.
```js
let add = (a, b) => a + b

add(3, 2) // => 5
```
