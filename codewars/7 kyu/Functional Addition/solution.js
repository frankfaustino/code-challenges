// Source : https://www.codewars.com/kata/functional-addition/train/javascript
// Author : Frank Faustino
// Date   : 2017-09-15

const add = n => x => n + x

// function add (n) {
//   return function (x) {
//     return n + x
//   }
// }

console.log(add(1)(3)) // 4
console.log(add(3)(3)) // 6