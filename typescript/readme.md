# Typescript

### *O que é Typescript?*

Typescript é uma ferramenta criada pela Microsoft como um wrapper em torno do Javascript, portanto pode oferecer características importantes para o desenvolvimento, como tipagem e interfaces.
No entanto, a linguagem precisa ser compilada para Javascript para funcionar no browser.

### *Instalação*

Para compilar seus arquivos Typescript (`.ts`) para Javascript (`.js`) é necessário instalar um pacote do `npm` com o comando:

```bash
∴ npm install -g typescript
```

### *Uso*
Para compilar seus arquivos, navegue até a pasta que contém os arquivos e execute:

```bash
∴ tsc nome-do-arquivo
```

Para criar um arquivo de configuração para a pasta:

```bash
∴ tsc --init
```

Após isso você pode compilar os arquivos toda vez que o programa verificar uma alteração nos arquivos `.ts`:

```bash
∴ tsc -w
```

Para mais informações, verificar a [documentação](https://www.typescriptlang.org/docs/home.html)

## Tipos
```js
// Number
let num = 34
let defNum: number = 34

// String
let str = 'Some String'
let defStr: string = 'Some String'

// Boolean
let bool = true
let defBool: boolean = true

// Arrays
let strArr = ['String 1', 'String 2', 'String 3']
let defStrArr: string[] = ['String 1', 'String 2', 'String 3']

let numArr = [100, 200, 300]
let defNumArr: number[] = [100, 200, 300]

let objArr = [{ a: 1 }, { b: 2 }, { c: 3 }]
let defObjArr: object[] = [{ a: 1 }, { b: 2 }, { c: 3 }]

let anyArr = ['String 1', 50]
let defAnyArr: any[] = ['String 1', 50]

// Any
let anyValue: any = 'Some Value'
anyValue = 55

// Tuples
// => São arrays com tipos mistos e um número limitado de itens
let adress: [string, number] = ['Fake Street name', 77]

// Enums
enum Color {
  Red,
  Green,
  Blue
}

let myColor: Color = Color.Green
```
Esse arquivo Typescript será compilado para:

```js
"use strict";
// Number
var num = 34;
var defNum = 34;
// String
var str = 'Some String';
var defStr = 'Some String';
// Boolean
var bool = true;
var defBool = true;
// Arrays
var strArr = ['String 1', 'String 2', 'String 3'];
var defStrArr = ['String 1', 'String 2', 'String 3'];
var numArr = [100, 200, 300];
var defNumArr = [100, 200, 300];
var objArr = [{ a: 1 }, { b: 2 }, { c: 3 }];
var defObjArr = [{ a: 1 }, { b: 2 }, { c: 3 }];
var anyArr = ['String 1', 50];
var defAnyArr = ['String 1', 50];
// Any
var anyValue = 'Some Value';
anyValue = 55;
// Tuples
// => São arrays com tipos mistos e um número limitado de itens
var adress = ['Fake Street name', 77];
// Enums
var Color;
(function (Color) {
  Color[Color["Red"] = 0] = "Red";
  Color[Color["Green"] = 1] = "Green";
  Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
```
