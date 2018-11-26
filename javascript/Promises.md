```js
// Para criar uma promise:

function getInfoPromise(name) {
  return new Promise(function(resolve, reject) {
    resolve('Tudo ok') // Se der tudo certo
    reject('Erro aqui') // Se der errado
  })
}

getInfoPromise('Sadraque')
  .then(function (info) {
    return console.log(info)
  })
  .catch(function (err) {
    return console.log(err)
  })

// Coisa linda :D

// Challenge
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number' ) {
      resolve(a + b)
    } else {
      reject('Arguments must be numbers')
    }
  })
}

// Success
addPromise(4, 6)
  .then(function(res) {
    console.log(res)
  })
  .catch(function(err) {
    console.log(err)
  })

// Error
addPromise('4', 6)
  .then(function(res) {
    console.log(res)
  })
  .catch(function(err) {
    console.log(err)
  })
```
