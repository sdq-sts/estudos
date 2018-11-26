## Anotações sobre a sintaxe do Mocha + Chai

## Funções Mocha

### Describe
O `describe` descreve uma classe/função que esteja sendo testada, pode-se
ter `describe` dentro de outro `describe`, por exemplo:

```js
describe('Testando classe Foo', () => {
  describe('Testando método Bar', () => {
    // ...
  })
})
```

### Context
Também é possível criar contextos de casos de testes com a palavra `context`:

```js
describe('Testando classe Foo', () => {
  describe('Testando método Bar', () => {
    context('Caso Bar seja True', () => {
      // ...
    })

    context('Caso Bar seja False', () => {
      // ...
    })
  })
})
```

## Funções Chai

### It
It é a função que realmente faz nosso código rodar, executando os testes:

```js
describe('Testando classe Foo', () => {
  describe('Testando método Bar', () => {
    it('Deve acontecer algo', () => {
      // O que deve acontecer
    })

    it('Deve acontecer outra coisa', () => {
      throw new Error('Quando um erro acontece, o Mocha lança um erro. Isso aqui é um erro.')
    })
  })
})
```

## Skip, Only e Bail

### Bail

Conhecido também como `Fail Fast`, esse comando faz com que os testes parem de
ser executados quando acontecer o primeiro erro. Para isso é necessário adicionar a
flag `--bail` ao executar os testes.

```bash
npm test --bail
```

### Only

Quando se quer rodar apenas um teste e os outros não são necessários, é
possível usar o método `only`, que faz que apenas um trecho dos testes sejam executados.

```js
describe('Testando classe Foo', () => {
  describe('Testando método Bar', () => {
    context('Caso Bar seja True', () => {
      // ...
    })

    context.only('Caso Bar seja False', () => {
      // Será executado apenas esse bloco
    })
  })
})
```

### Skip

Serve para pular o trecho de testes.

```js
describe('Testando classe Foo', () => {
  describe('Testando método Bar', () => {
    context.skip('Caso Bar seja True', () => {
      // Não será executado
    })

    context.('Caso Bar seja False', () => {
      // ...
    })
  })
})
```


## Hooks no Mocha

### Before

Essa função vai rodar `uma vez` apenas `antes` de executar o bloco de testes.

```js
describe('Testando classe Foo', () => {
  before(() => {
    // Executa antes do bloco
  })

  describe('Testando método Bar', () => {

  })
})
```

### After

Essa função vai rodar `uma vez` apenas `depois` de executar um bloco de testes.

```js
describe('Testando classe Foo', () => {
  after(() => {
    // Executa depois do bloco
  })

  describe('Testando método Bar', () => {

  })
})
```

### BeforeEach

Essa função roda `todas as vezes antes` de cada bloco.

```js
describe('Testando classe Foo', () => {
  beforeEach(() => {
    // Executa todas as vezes antes de cada bloco
  })

  describe('Testando método Bar', () => {

  })
})
```

### AfterEach

Essa função é executada `todas as vezes depois` de cada bloco.

```js
describe('Testando classe Foo', () => {
  afterEach(() => {
    // Executa todas as vezes depois de cada bloco
  })

  describe('Testando método Bar', () => {

  })
})
```

## Métodos do Chai

`Chai` é a biblioteca de `asserts` e é responsável pela lógica dentro de cada bloco de `it`. O `Chai` tem 3 interfaces de teste, `should`, o `expect` e `assert`, o uso mais comum é o `expect` e possui os seguintes [`chains`](http://chaijs.com/api/bdd/).

- to
- be
- been
- is
- that
- which
- and
- has
- have
- with
- at
- of
- same
- but
- does

```js
import { expect } from 'chai'

const square = (x) => x * x

describe('Testing square function', () => {
  it('should return 25 when passed 5', () => {
    expect(square(5)).to.be.equal(25)
  })
})
```

## Sinon

### Spy, Stubs e Mocks

O `Spy` é necessário para espionar métodos e saber se eles foram chamados,
a característica principal do `Spy` é que ele realmente chama um método e diz com quais argumentos ele foi chamado.

Já o `Stub` simula que um método foi ou não chamado e retorna um valor, a característica principal do `Stub` é que ele evita que um método seja chamado, fazendo com que o teste seja executado mais rapidamente.

`Mocks`, são métodos falsos com comportamento pré programado, como `Stubs`.
