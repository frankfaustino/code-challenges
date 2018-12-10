// Title  : Root of Number
// Source : https://www.pramp.com/challenge/jKoA5GAVy9Sr9jGBjzN4
// Author : Frank Faustino
// Date   : 2018-01-13

// The nth root of x is the same as x to the power of 1/n. Math.pow(x, 1/n)
const root = Math.pow(16, 1/4)
Math.pow(root, 4) === 16

const root = (x, n) => {
  if (x === 0) return 0
  let start = 0
  let end = x
  let approxRoot = (start + end) / 2

  while (approxRoot - start >= 0.001) {
    if (Math.pow(approxRoot, n) > x) {
      end = approxRoot
    } else if (Math.pow(approxRoot, n) < x) {
      start = approxRoot
    } else {
      break
    }
    approxRoot = (start + end) / 2
  }

  return Math.round(approxRoot * 1000) / 1000
}

/* ——— Test cases ——— */
console.log(root(3, 2)) // -> 1.732
console.log(root(7, 3)) // -> 1.913
console.log(root(16, 4)) // -> 2
console.log(root(4, 2)) // -> 2
console.log(root(10, 3)) // -> 2.154
console.log(root(9, 2)) // -> 3
console.log(root(27, 3)) // -> 3
console.log(root(160, 3)) // -> 5.429
