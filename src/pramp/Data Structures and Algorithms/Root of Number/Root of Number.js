// Title  : Root of Number
// Source : https://www.pramp.com/challenge/jKoA5GAVy9Sr9jGBjzN4
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

/* ——— Test cases ——— */
root(4, 2) // -> 2
root(27, 3) // -> 3
root(16, 4) // -> 4
root(3, 2) // -> 1.732
root(10, 3) // -> 2.154
root(160, 3) // -> 5.429
