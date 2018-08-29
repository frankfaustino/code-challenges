// Source : to Binary String
// Author : Frank Faustino
// Date   : 2018-02-27
// Lang   : JavaScript

const toBinaryString = n => {
  let str = ''
  while (n > 0) {
    str = n % 2 + str
    n >>= 1
  }
  return str
}

// >> is equivalent to Math.floor(n / 2)
// Shifts bits right by pushing leftmost bit and letting the rightmost bit fall off
// 99      >> 49
// 1100011 >> 110001

// 128   64    32   16    8    4    2    1
// 2^7  2^6   2^5  2^4  2^3  2^2  2^1  2^0
//   0    1     1    0    0    0    1    1