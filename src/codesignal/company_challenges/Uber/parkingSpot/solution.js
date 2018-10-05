// Source : https://app.codesignal.com/company-challenges/uber/XHNFMPBYsqNyhx9PP
// Author : Frank Faustino
// Date   : 2018-10-03
// Lang   : JavaScript

function parkingSpot(carDimensions, parkingLot, luckySpot) {
  const top = luckySpot[0]
  const bot = luckySpot[2]
  const left = luckySpot[1]
  const right = luckySpot[3]

  function checkSpot(a, b, x, y) {
    for (let i = a; i <= b; i++) {
      for (let j = x; j <= y; j++) {
        if (parkingLot[i][j]) return false
      }
    }
    return true
  }

  if (Math.abs(top-bot) > Math.abs(left-right)) {
    if (checkSpot(0, bot, left, right)) return true
    if (checkSpot(top, parkingLot.length - 1, left, right)) return true
  } else {
    if (checkSpot(top, bot, 0, right)) return true
    if (checkSpot(top, bot, left, parkingLot[0].length - 1)) return true
  }

  return false
}

module.exports = parkingSpot