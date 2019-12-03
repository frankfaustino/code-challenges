// Source : https://adventofcode.com/2018/day/3
// Author : Frank Faustino
// Date   : 2018-12-03
// Lang   : JavaScript

const input = require('../utils')('03', 'input')

const grid = [...Array(1000)].map(() => Array(1000).fill(0))
let claims

const populateGrid = ([id, left, top, width, height]) => {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      grid[y + top][x + left] += 1
    }
  }
}

const checkOverlap = ([id, left, top, width, height]) => {
  const arr = []

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      arr.push(grid[y + top][x + left])
    }
  }

  return arr.every(v => v === 1)
}

const partOne = input => {
  const regex = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/
  claims = input.split(/\n/).map(claim => {
    const [str, id, left, top, width, height] = regex.exec(claim)
    return [+id, +left, +top, +width, +height]
  })
  claims.forEach(claim => populateGrid(claim))
  return grid.reduce((a, b) => {
    return a + b.filter(v => v >= 2).length
  }, 0)
}

const partTwo = () => {
  for (let claim of claims) {
    if (checkOverlap(claim)) {
      return claim[0]
    }
  }
}

module.exports = { input, partOne, partTwo }
