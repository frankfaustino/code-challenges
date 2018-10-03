// Source : https://www.codewars.com/kata/counting-change-combinations/
// Author : Frank Faustino
// Date   : 2017-11-05

const countChange = (m, c) => m == 0
  ? 1
  : c.filter(e => e <= m).reduce((s, n, i, a) => s + countChange(m - a[i], a.slice(i)), 0)

// const countChange = (m, c) => {
//   if (m < 0 || !c.length) return 0
//   if (m === 0) return 1
//   return countChange(m - c[0], c) + countChange(m, c.slice(1))
// }

// const countChange = (m, c) => {
//   let [coin, ...rest] = c
//   if (m < 0 || !coin) return 0
//   if (m == 0) return 1
//   return countChange(m - coin, c) + countChange(m, rest)
// }

console.log(countChange(4, [1, 2]))     // => 3
console.log(countChange(10, [5, 2, 3])) // => 4
console.log(countChange(11, [5, 7]))    // => 0
