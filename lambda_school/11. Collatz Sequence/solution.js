// Source : Collatz Sequence
// Author : Frank Faustino
// Date   : 2018-02-27
// Lang   : JavaScript

const collatzSequence = n => {
  const arr = [n]
  while (n !== 1) {
    arr.push(n = n % 2 === 0 ? n / 2 : n * 3 + 1)
  }
  return arr
}
