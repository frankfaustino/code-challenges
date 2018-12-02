// Source : https://adventofcode.com/2018/day/2
// Author : Frank Faustino
// Date   : 2018-12-02
// Lang   : JavaScript

const { readFileSync } = require('fs')

const input = readFileSync(require.resolve('./input'), 'utf8')

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