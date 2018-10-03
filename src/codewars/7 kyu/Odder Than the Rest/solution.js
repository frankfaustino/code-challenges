// Source : https://www.codewars.com/kata/5983cba828b2f1fd55000114
// Author : Frank Faustino
// Date   : 2017-09-03

const oddOne = arr => arr.reduce((a, b, i) => (b & 1 ? i : a), -1)

console.log(oddOne([2, 4, 6, 7, 10]))
console.log(oddOne([2, 16, 98, 10, 13, 78]))
console.log(oddOne([4, -8, 98, -12, -7, 90, 100]))
console.log(oddOne([2, 4, 6, 8]))
