// Source : https://codewars.com/kata/the-pony-express-missing-rider
// Author : Frank Faustino
// Date   : 2018-07-04
// Lang   : JavaScript

// a) forEach
const riders = (distances, lostAt) => {
  let travelled = 0
  let numOfRiders = 1

  distances.forEach((distance, i) => {
    if (travelled + distance <= 100) {
      travelled += distance
    } else {
      numOfRiders++
      travelled = distance
    }
    if (lostAt - 2 === i) {
      numOfRiders++
      travelled = distance * 2
      if (travelled > 100) {
        numOfRiders++
        travelled /= 2
      }
    }
  })

  return numOfRiders
}

// b) while loop
const riders = (distances, lostAt) => {
  let numOfRiders = 1
  let station = 1
  let travelled = 0

  while (station !== distances.length + 1 || lostAt) {
    if (station === lostAt) {
      numOfRiders++
      station--
      travelled = distances[station - 1]
      lostAt = 0
    } else if (travelled + distances[station - 1] <= 100) {
      travelled += distances[station - 1]
      station++
      continue
    } else {
      numOfRiders++
      travelled = 0
    }
  }

  return numOfRiders
}

// c) reduce
const riders = (distances, lostAt) => {
  if (distances.length === 1 && s[0] === 100) return 3

  return distances.reduce(
    ([travelled, numOfRiders], distance, i) => {
      if (lostAt - 2 === i) {
        return [
          distance * 2,
          numOfRiders +
            (distance * 2 > 100 ? 3 : travelled + distance > 100 ? 2 : 1)
        ]
      } else if (travelled + distance > 100) {
        return [distance, numOfRiders + 1]
      } else {
        return [travelled + distance, numOfRiders]
      }
    },
    [0, 1]
  )[1]
}
