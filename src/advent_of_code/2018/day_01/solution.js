// Source : https://adventofcode.com/2018/day/1
// Author : Frank Faustino
// Date   : 2018-12-01
// Lang   : JavaScript

const input = require('../utils')('01', 'input')

const parseInput = input => input.split(/\n/).map(Number)

function* cycle(iterable) {
  while (true) {
    for (const item of iterable) {
      yield item
    }
  }
}

const partOne = input => parseInput(input).reduce((a, c) => a + c, 0)

const partTwo = input => {
  const changes = parseInput(input)
  const seen = new Set()
  let frequency = 0

  for (let change of cycle(changes)) {
    seen.add(frequency)
    frequency += change
    if (seen.has(frequency)) {
      return frequency
    }
  }
}

module.exports = { input, partOne, partTwo }