// Title  : Rotate a 2D Array
// Author : Frank Faustino
// Date   : 2019-02-13
// Lang   : JavaScript

const rotate2DArray = arr =>
  arr.map((row, i) => row.map((col, j) => arr[arr.length - 1 - j][i]))

// function rotate2DArray(arr) {
  // const output = [...Array(arr.length)].map(_ => Array(arr[0].length))

  // for (let i = 0; i < arr.length; i++) {
    // for (let j = 0; j < arr[i].length; j++) {
      // output[i][j] = arr[arr.length - 1 - j][i]
    // }
  // }

  // return output
// }

module.exports = rotate2DArray
