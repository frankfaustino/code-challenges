// Source : https://adventofcode.com/2018/day/2
// Author : Frank Faustino
// Date   : 2018-12-02
// Lang   : JavaScript

const input = require('../utils')('02', 'input')

const checkCount = string => {
  const counter = string.split('').reduce((obj, char) => {
    obj[char] = (obj[char] || 0) + 1
    return obj
  }, {})
  return Object.values(counter)
}

const partOne = boxes => {
  let twos = 0
  let threes = 0

  boxes.split(/\n/).forEach(box => {
    const count = checkCount(box)
    if (count.includes(2)) twos++
    if (count.includes(3)) threes++
  })

  return twos * threes
}

module.exports = { input, partOne }