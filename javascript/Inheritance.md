## Inheritance

### ES5
```js
// Criando a classe 'Animal'
function Animal(data) {
  // Adicionando propriedades
  this.legs = data.legs
  this.isMammal = data.isMammal 
}

// Adicionando métodos ao protótipo de 'Animal'
Animal.prototype.breathe = function() {
  return console.log('This animal is breathing')
}

// -----------------------------------------------

// Criando a classe 'Dog'
function Dog(data) {
  // Herdando as propriedades de 'Animal' (super constructor)
  Animal.call(this, { legs: 4, isMammal: true })

  // Adicionando as próprias propriedades
  this.name = data.name
}

// Herdando o prototype (métodos) de 'Animal'
Dog.prototype = Object.create(Animal.prototype)

// Adicionado os próprios métodos
Dog.prototype.bark = function() {
  return console.log(this.name + ' is barking')
}

// Instanciando 'Dog'
var max = new Dog({ name: 'Max' })

console.log(max.name)      // => Max
console.log(max.legs)      // => 4
console.log(max.isMammal)  // => true

max.breathe() // => This animal is breathing
max.bark()    // => Max is barking
```

---

### ES6
```js
// Criando a class 'Animal'
class Animal {
  // Adicionando propriedades
  constructor(data) {
    this.legs = data.legs
    this.isMammal = data.isMammal
  }

  // Adicionando métodos
  breathe() {
    return console.log('This animal is breathing')
  }
}

// -----------------------------------------------

// Herdando o prototype de 'Animal' através de 'extends'
class Dog extends Animal {
  constructor(data) {
    // Herdando as propriedades de 'Animal' e passando parâmetros para o construtor
    super({ legs: 4, isMammal: true })

    // Adicionando os próprios parâmetros
    this.name = data.name
  }

  // Adicionando os próprios métodos
  bark() {
    return console.log(this.name + ' is barking')
  }
}

const max = new Dog({ name: 'Max' })

console.log(max.name)      // => Max
console.log(max.legs)      // => 4
console.log(max.isMammal)  // => true

max.breathe() // => This animal is breathing
max.bark()    // => Max is barking
```
