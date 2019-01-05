// Snail  : https://www.codewars.com/kata/snail/javascript
// Author : Frank Faustino
// Date   : 2019-01-04

const snail = (array) => {
  let output = []
  while (array.length) {
    output.push(...array.shift())
    array.forEach(row => output.push(row.pop()))
    array.reverse().forEach(row => row.reverse())
  }
  return output
}

module.exports = snail