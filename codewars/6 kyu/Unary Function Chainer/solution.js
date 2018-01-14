// Source : https://www.codewars.com/kata/unary-function-chainer/javascript
// Author : Frank Faustino
// Date   : 2017-09-26

// Your task is to write a higher order function for chaining together a list of unary functions
// In other words, it should return a function that does a left fold on the given functions.
// A unary function is a function that takes one argument.

// chained([a,b,c,d])(input)
// Should yield the same result as d(c(b(a(input))))


const chainedFunctions = arr => (x) => arr.reduce((p, c) => c(p), x)

// const chainedFunctions = arr => {
//   return (x) => {
//     return arr.reduce((p, c) => {
//       return c(p)
//     }, x)
//   }
// }

// const chainedFunctions = arr => {
//   return (x) => {
//     for (let f of arr) {
//       x = f(x)
//     }
//     return x
//   }
// }

// const chainedFunctions = arr => {
//   return (x) => {
//     for (let i = 0; i < arr.length; i++) {
//       x = arr[i](x)
//     }
//     return x
//   }
// }

function f1(x) { return x*2 }
function f2(x) { return x+2 }
function f3(x) { return Math.pow(x,2) }

function f4(x) { return x.split('').concat().reverse().join('').split(' ') }
function f5(x) { return x.concat().reverse() }
function f6(x) { return x.join('_') }

console.log(chainedFunctions([f1, f2, f3])(0)) // 4
console.log(chainedFunctions([f1, f2, f3])(2)) // 36
console.log(chainedFunctions([f3, f2, f1])(2)) // 12
console.log(chainedFunctions([one, two])(3))   // <-- currying, binds 3 to the first function invoke
