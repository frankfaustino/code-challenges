// Source : https://www.hackerrank.com/challenges/diagonal-difference/problem
// Author : Frank Faustino
// Date   : 2018-01-12

const diagonalDifference = (a) => {
  let d1 = 0, d2 = 0
  for (let i = 0; i < a.length; i++) {
    d1 += a[i][i]
    d2 += a[i][n - i - 1]
  }
  return Math.abs(d1 - d2)
}
