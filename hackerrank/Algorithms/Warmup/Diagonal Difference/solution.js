// Source : https://www.hackerrank.com/challenges/diagonal-difference/problem
// Author : Frank Faustino
// Date   : 2019-01-12

const diagonalDifference = (a) => {
  let d1 = 0, d2 = 0
  for (let i = 0; i < a.length; i++) {
    d1 += a[i][i]
    d2 += a[i][n - i - 1]
  }
  return Math.abs(d1 - d2)
}

// const diagonalDifference = (a) => {
//   let d1 = 0, d2 = 0
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//       if (i == j) d1 += a[i][j]
//       if (i == a.length - j - 1) d2 += a[i][j]
//     }
//   }
//   return Math.abs(d1 - d2)
// }
