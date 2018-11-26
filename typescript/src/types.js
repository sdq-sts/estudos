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
