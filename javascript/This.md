## this

A palavra reservada `this` referencia um objeto no contexto que foi executada, por exemplo:

```js
var fn = function () {
  console.log(this)
}

var objUm = {
  name: 'Objeto 1',
  x: fn
}

var objDois = {
  name: 'Objeto Dois',
  x: fn
}

fn()        // this = Window{...}
objUm.x()   // this = Object {name: "Objeto 1"}
objDois.x() // this = Object {name: "Objeto Dois"}
```
