## Closures

Closure é um conceito que permite que uma função acesse variáveis da sua função 'pai' e se 'lembre' em que contexto foi executada.

**Escopo léxico**
```js
var meuNome = function () {
  var nome = 'Sadraque'
  var mostrarNome = () => console.log(nome)

  mostrarNome()
}

meuNome()
```

**Closure**
```js
var meuNome = function () {
  var nome = 'Sadraque'

  var mostrarNome = () => console.log(nome)

  return mostrarNome
}

var minhaFunc = meuNome()
minhaFunc()
```

Note que nesse caso a `meuNome()` retorna **outra** função, isso permite que as funções criadas não precisem de todos argumentos na primeira vez que é chamada.

```js
function somar (x) {
  return function (y) {
    return x + y
  }
}

var adicionar3 = somar(3)

console.log(adicionar3(2)) // 5
```
