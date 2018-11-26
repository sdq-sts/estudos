# Callbacks

Um callback é uma função passada a outra função e se assume 
que ela será invocada em algum momento.

```js
function addNumbers(a, b, callback) {
  let result = a + b

  callback(result)
}

// showResult é a função de callback
function showResult(result) {
  return console.log('The result is: ' + result)
}

// Executando a função, passando o callback como 3 argumento
addNumbers(5, 6, showResult)
// =>'The result is: 11'

```
