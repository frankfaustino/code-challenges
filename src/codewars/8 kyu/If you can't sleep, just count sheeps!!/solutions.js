// Source : https://codewars.com/kata/if-you-cant-sleep-just-count-sheeps
// Author : Frank Faustino
// Date   : 2018-07-07
// Lang   : JavaScript

// a) recursion
const countSheep = (n, s = 'sheep...') =>
  n < 2 ? `${n} ${s}` : `${countSheep(n - 1)}${n} ${s}`

// b) Array, map, join
const countSheep = n =>
  [...Array(n)].map((_, i) => `${i + 1} sheep...`).join``

// c) while loop
const countSheep = (n, i = 1, s = '') => {
  while (i <= n) {
    s += `${i} sheep...`
    i++
  }
  return s
}
