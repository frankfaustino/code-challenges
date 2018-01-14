// Source : https://www.codewars.com/kata/function-dot-prototype-dot-clone
// Author : Frank Faustino
// Date   : 2017-12-26

function x() {
  return 1
}

function t(a, b, c) {
  return a + b + c
}

Function.prototype.clone = function() {
  return new Function('return ' + this.toString())()
}

console.log(x() === x.clone())
console.log(x() === x.clone()())
console.log(t(1, 1, 1) === t.clone()(1, 1, 1))

// Verbose way
// Function.prototype.clone = function() {
//   let newFunction = new Function('return ' + this.toString())()
//   for (let key in this) newFunction[key] = this[key]
//   return newFunction
// }

// toString() really clones a function
// let f = function(x, y) { return x + y }
// let s = f.toString()
