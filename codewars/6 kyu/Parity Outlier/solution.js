// Source : https://www.codewars.com/kata/find-the-parity-outlier
// Author : Frank Faustino
// Date   : 2017-09-19

const a = [2, 4, 0, 100, 4, 11, 2602, 36] // 11
const b = [160, 3, 1719, 19, 11, 13, -21] // 160
const c = [1, 3, 5, 7, 9, 11, 12]         // 12

const findOutlier = (arr) => {
  const even = arr.filter(n => n % 2 === 0)
  const odd = arr.filter(n => n % 2 !== 0)
  return odd.length > 1 ? even[0] : odd[0]
}

console.log(findOutlier(c))
