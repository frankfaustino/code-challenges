// Source : https://adventofcode.com/2018/day/2
// Author : Frank Faustino
// Date   : 2018-12-02
// Lang   : JavaScript

const { readFileSync } = require('fs')

const input = readFileSync(require.resolve('./input'), 'utf8')

const parseInput = input => input.split(/\n/)

const checkCount = string => {
  const counter = string.split('').reduce((obj, char) => {
    obj[char] = (obj[char] || 0) + 1
    return obj
  }, {})
  return Object.values(counter)
}

const partOne = input => {
  const string = parseInput(input)
  let twos = 0
  let threes = 0

  string.forEach(line => {
    if (checkCount(line).includes(2)) twos++
    if (checkCount(line).includes(3)) threes++
  })

  return twos * threes
}

module.exports = { input, partOne }