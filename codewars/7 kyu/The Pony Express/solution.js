// Source : https://www.codewars.com/kata/the-pony-express/
// Author : Frank Faustino
// Date   : 2018-06-14
// Lang   : JavaScript

// a1) reduce
const riders = stations => {
  return stations.reduce(([distance, rider], station) => {
    if (distance + station < 100) {
      return [distance + station, rider]
    } else {
      return [station, rider + 1]
    }
  }, [0, 1])[1]
}

// a2) reduce
const riders = stations => stations.reduce(([d, r], s) =>
  d + s < 100 ? [d + s, r] : [s, r + 1], [0, 1])[1]

riders([18, 15]) // 1
riders([43, 23, 40, 13]) // 2
riders([33, 8, 16, 47, 30, 30, 46]) // 3
riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]) // 4