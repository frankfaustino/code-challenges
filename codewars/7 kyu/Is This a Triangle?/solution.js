// Source : https://www.codewars.com/kata/is-this-a-triangle/javascript
// Author : Frank Faustino
// Date   : 2017-12-27

// Using nested ternary operators
const isTriangle = (a, b, c) =>
  a + b > c ? (a + c > b ? b + c > a : false) : false

// && conditional
const isTriangle = (a, b, c) => a + b > c && a + c > b && c + b > a

// Compares the longest length with 1/2 of the sum of all 3 lengths
const isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2

// Sorts the values first, then does one comparison
const isTriangle = (a, b, c) => {
  [a, b, c] = [a, b, c].sort((x, y) => x - y)

  return a + b > c
}

// a + b | 1 + 2 = 3 true
// a + c | 1 + 2 = 3 true
// b + c | 2 + 2 = 4 true

// a + b | 7 + 2 = 9 true
// a + c | 7 + 2 = 9 true
// b + c | 2 + 2 = 4 false

console.log(isTriangle(1, 2, 2))
console.log(isTriangle(7, 2, 2))

// any two sides added must be larger than the third
