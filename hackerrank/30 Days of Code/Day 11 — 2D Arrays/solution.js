// Source : https://www.hackerrank.com/challenges/30-2d-arrays/problem
// Author : Frank Faustino
// Date   : 2018-02-04
// Lang   : JavaScript

const max = []

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i <= 3 && j <= 3) {
      let sum = 0
      sum += arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
      sum += arr[i + 1][j + 1]
      sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      max.push(sum)
    }
  }
}

console.log(Math.max(...max))