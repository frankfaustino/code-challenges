// Source : https://www.pramp.com/question/jKoA5GAVy9Sr9jGBjzN4
// Author : Frank Faustino
// Date   : 2018-01-13

const root = (x, n) => {
  let left = 1
  let right = x
  let mid = (left + right) / 2
  if (x === 0) return 0
  while (Math.abs(Math.pow(mid, n) - x) >= 0.001) {
    if (Math.pow(mid, n) > x) right = mid
    else if (Math.pow(mid, n) < x) left = mid
    mid = (left + right) / 2
  }
  return Math.round(mid * 1000) / 1000
}

console.log(root(9, 2))
console.log(Math.sqrt(9))
