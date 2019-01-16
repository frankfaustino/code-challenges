// Source : https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// Author : Frank Faustino
// Date   : 2018-01-16

// function birthdayCakeCandles(ar) {
//   let tallest = -Infinity

//   return ar.reduce((acc, candle) => {
//     if (candle > tallest) tallest = candle
//     acc[candle] = (acc[candle] || 0) + 1
//     return acc
//   }, {})[tallest]
// }

function birthdayCakeCandles(ar) {
  let tallest = -Infinity
  let counter = 1

  ar.forEach(candle => {
    if (candle > tallest) {
      tallest = candle
    } else if (candle === tallest) {
      counter++
    }
  })

  return counter
}

module.exports = birthdayCakeCandles
