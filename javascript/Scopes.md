## Escopos

Escopo léxico são áreas em seu código onde você consegue acessar variáveis por nome sem ter erros de acesso.

Um exemplo é o escopo global, que quando uma variável é criada no mesmo, permite que ela seja acessada em qualquer parte do seu código.

Ao criar uma _função_, um novo escopo léxico é criado, o escopo léxico da função vai de `f` da palavra `function` até o fechamento da função.

```js
var a = 'Escopo global'

function funcScope () {
  var b = 'Escopo de função'

  console.log(a) // Escopo global
  console.log(b) // Escopo de função
}

console.log(a) // Escopo global
console.log(b) // undefined
```

Nem todos os blocos (definidos por chaves) definem novos escopos como o `for` e `while` loops, a não ser que uma variável seja definida com `let`, que é `block scoped`.

---

Uma variável definida pela palavra chave `let`, que pertence ao ES6, tem escopo por bloco.

```js
let i = 1
while (i < 5) {
  let blockScopedVariable = 'Inacessível fora do bloco while'

  i++
}

console.log(blockScopedVariable) // undefined
```
