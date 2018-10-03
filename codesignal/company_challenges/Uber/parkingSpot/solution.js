// Source : https://app.codesignal.com/company-challenges/uber/XHNFMPBYsqNyhx9PP
// Author : Frank Faustino
// Date   : 2018-10-03
// Lang   : JavaScript

function parkingSpot(carDimensions, parkingLot, luckySpot) {
  const top = luckySpot[0]
  const bot = luckySpot[2]
  const left = luckySpot[1]
  const right = luckySpot[3]
  let isValidSpot = false

  // check if the luckySpot contains a 1 (check if it's a valid parking spot)
  for (let i = top; i <= bot; i++) {
    for (let j = left; j <= right; j++) {
      if (parkingLot[i][j] === 1) return false
    }
  }

  function checkSpot(x, a, b) {
    for (let i = a; i <= b; i++) {
      if (parkingLot[i][x]) return false
    }
    return true
  }

  if (Math.abs(top-bot) > Math.abs(left-right)) {
    // check if the car parked vertically
    if (!parkingLot[top - 1] || !parkingLot[bot + 1]) {
      isValidSpot = true
    } else if (parkingLot[top - 1]) {
      // check for empty path from the top
      if (checkSpot(top - 1), left, right) return true
    } else {
      // check for empty path from the bottom
      if (checkSpot(bot + 1), left, right) return true
    }
  } else {
    // the car parked horizontally
    if (left - 1 < 0 || right + 1 > parkingLot[0].length - 1) {
      isValidSpot = true
    } else if (left - 1 >= 0) {
      // check for empty path from the left
      if (checkSpot(left - 1, top, bot)) return true
    } else {
      // check for empty path from the right
      if (checkSpot(right + 1, top, bot)) return true
    }
  }

  return isValidSpot
}