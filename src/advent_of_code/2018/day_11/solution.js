const input = require('../utils')('11', 'input')

const sn = Number(input)

const grid = [...Array(301)].map(() => Array(301).fill(null))

const calculatePower = (x, y) => {
  const rackID = x + 10
  let power = rackID * y
  power += sn
  power *= rackID
  return (Math.floor(power / 100) % 10) - 5
}

// Fill grid
(() => {
  for (let x = 1; x < 301; x++) {
    for (let y = 1; y < 301; y++) {
      grid[x][y] = calculatePower(x, y)
    }
  }
})()

const getSum = (a, b, size) => {
  let sum = 0
  for (let x = a; x < a + size; x++) {
    for (let y = b; y < b + size; y++) {
      sum += grid[x][y]
    }
  }
  return sum
}

// What is the X,Y coordinate of the top-left fuel cell of the 3x3 square
// with the largest total power?
const partOne = () => {
  const largest = { total: 0, x: 0, y: 0 }

  for (let x = 1; x < 298; x++) {
    for (let y = 1; y < 298; y++) {
      const sum = getSum(x, y, 3)
      if (sum > largest.total) {
        largest.total = sum
        largest.x = x
        largest.y = y
      }
    }
  }

  return largest
}

// What is the X,Y,size identifier of the square with the largest total power?
const partTwo = () => {
  const largest = { total: 0, x: 0, y: 0, size: 0 }

  for (let size = 1; size < 18; size++) {
    for (let x = 1; x < 301 - size; x++) {
      for (let y = 1; y < 301 - size; y++) {
        let sum = 0
        for (let row = 0; row < size; row++) {
          for (let col = 0; col < size; col++) {
            sum += grid[x + row][y + col]
          }
        }
        if (sum > largest.total) {
          largest.total = sum
          largest.x = x
          largest.y = y
          largest.size = size
        }
      }
    }
  }

  return largest
}

module.exports = { partOne, partTwo }