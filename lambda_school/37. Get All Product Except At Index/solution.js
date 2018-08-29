// Title  : Get All Product Except At Index
// Author : Frank Faustino
// Date   : 2018-05-22
// Lang   : JavaScript

// a) O(n) — 2× for loop
const getProduct = arr => {
  const output = []
  let product = 1

  for (let i = 0; i < arr.length; i++) {
    output[i] = product
    product *= arr[i]
  }

  product = 1

  for (let i = arr.length - 1; i >= 0; i--) {
    output[i] *= product
    product *= arr[i]
  }

  return output
}

// b) map, slice, reduce
const getProduct = arr =>
  arr.map((_, i) =>
    [...arr.slice(0, i), ...arr.slice(i + 1)].reduce((a, c) => a * c, 1)
  )