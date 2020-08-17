// Source : https://www.codewars.com/kata/550498447451fbbd7600041c
// Author : Frank Faustino
// Date   : 2020-08-17


// O(n log n) - sort() uses TimSort which is log n
function comp(a1, a2) {
  if (!Array.isArray(a1) || !Array.isArray(a2)) return false

  a1.sort((a, b) => a > b)
  a2.sort((a, b) => a > b)

  return a1.every((n, i) => n * n == a2[i])
}

// O(n) - using a dictionary to compare elements of both arrays
function comp(a1, a2) {
  if (!Array.isArray(a1) || !Array.isArray(a2)) return false

  const r = a => a.reduce((o, k) => {
    o[k] = o[k] ? o[k] + 1 : 1
    return o
  }, {})

  const o1 = r(a1)
  const o2 = r(a2)

  for (const k in o1) {
    if (o1[k] != o2[k * k]) return false
  }

  return true
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])) // true
console.log(comp([], null)) // false
console.log(comp([], [])) // true
console.log(comp([ 2, 2, 3 ], [ 4, 9, 9 ])) // false
console.log(comp([ 27, 10, 47, 95, 0, 12, 28 ], [ 729, 100, 2209, 9025, 0, 144, 784 ])) // true
console.log(comp([ 8, 16, 98, 58, 91, 3, 58, 46 ], [ 64, 256, 9604, 3364, 8281, 9, 3364, 2116 ])) // true
console.log(comp([ 121, 144, 19, 161, 19, 144, 19, 11 ], [ 121, 14641, 20736, 36100, 25921, 361, 20736, 361 ])) // false
console.log(comp([ 121, 144, 19, 161, 19, 144, 19, 11 ], [ 231, 14641, 20736, 361, 25921, 361, 20736, 361 ])) // false
console.log(comp([ 121, 144, 19, 161, 19, 144, 19, 11 ], [ 121, 14641, 20736, 36100, 25921, 361, 20736, 361 ])) // false