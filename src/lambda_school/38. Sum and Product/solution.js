// Title  : Sum and Product
// Author : Frank Faustino
// Date   : 2018-07-09
// Lang   : JavaScript

// a)
const sumAndProduct = (sum, product, i = 0) => {
  while (i < sum) {
    if (i * (sum - i) === product) return [i, sum - i]
    i++
  }

  return null
}
