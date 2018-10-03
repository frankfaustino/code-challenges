// Title  : Equal Sides
// Author : Frank Faustino
// Date   : 2018-03-17
// Lang   : JavaScript

// a) for loop
const equalSides = arr => {
  const sum = ar => ar.reduce((a, c) => a + c, 0)

  for (let i = 1; i < arr.length; i++) {
    const left = arr.slice(0, i)
    const right = arr.slice(i + 1, arr.length)
    if (sum(left) === sum(right)) return i
  }
  return -1
}

// b) forEach
const equalSides = arr => {
  const sum = ar => ar.reduce((a, c) => a + c, 0)
  let output = -1

  arr.forEach((_, i) => {
    const left = arr.slice(0, i)
    const right = arr.slice(i + 1, arr.length)
    if (sum(left) === sum(right)) output = i
  })
  return output
}