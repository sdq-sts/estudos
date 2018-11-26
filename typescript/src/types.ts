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

