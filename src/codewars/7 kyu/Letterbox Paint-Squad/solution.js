// Source : https://www.codewars.com/kata/letterbox-paint-squad/train/javascript
// Author : Frank Faustino
// Date   : 2018-06-14
// Lang   : JavaScript

const paintLetterboxes = function(start, end) {
  const key = Array(10).fill(0)

  for (let i = start; i <= end; i++) {
    i.toString().split('').forEach(digit => key[digit]++)
  }

  return key
}

paintLetterboxes(125, 132) // [1,9,6,3,0,1,1,1,1,1]