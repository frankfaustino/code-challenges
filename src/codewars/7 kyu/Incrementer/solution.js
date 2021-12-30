// Source : https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript
// Author : Frank Faustino
// Date   : 2021-12-29
// Lang   : JavaScript

const incrementer = n => n.map((x, i) => (x + i + 1) % 10)

module.exports = incrementer
