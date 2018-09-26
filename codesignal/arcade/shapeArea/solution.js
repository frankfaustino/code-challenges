// Title  : shapeArea
// Author : Frank Faustino
// Date   : 2018-07-04
// Lang   : JavaScript

// a) reduce
const shapeArea = n => [...Array(n)].reduce((a, _, i) => a += i * 4, 1)

// b) for loop
const shapeArea = n => {
  let output = 1

  for (let i = 1; i < n; i++) {
      output += i * 4
  }

  return output
}
