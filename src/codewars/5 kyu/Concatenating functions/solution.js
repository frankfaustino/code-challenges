// Source : https://www.codewars.com/kata/concatenating-functions/javascript
// Author : Frank Faustino
// Date   : 2017-09-26

const addOne = e => e + 1
const square = e => e * e

Function.prototype.pipe = function(fn) {
  return (...args) => fn(this(...args))
}

// Function.prototype.pipe = function(fn) {
//   return (i) => fn.call(fn, this.call(this, i));
// }

const result = [1, 2, 3, 4, 5].map(addOne.pipe(square))
console.log(result)
