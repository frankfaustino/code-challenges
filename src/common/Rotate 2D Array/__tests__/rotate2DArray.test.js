const solution = require('../solution')
const rotate2DArray = require('../rotate2DArray')

const tests = fn => {
  test('3×3 array', () => {
    const arr = [[1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]]
    expect(fn(arr)).toEqual([ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ])
  })
  test('4×4 array', () => {
    const arr = [[1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]]
    expect(fn(arr)).toEqual([[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]])
  })
  test('5×5 array', () => {
    const arr = [[1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]]
    expect(fn(arr)).toEqual([[21, 16, 11, 6, 1], [22, 17, 12, 7, 2], [23, 18, 13, 8, 3], [24, 19, 14, 9, 4], [25, 20, 15, 10, 5]])
  })
}

describe('Common — Rotate a 2D Array (solution)', () => {
  tests(solution)
})

describe('Common — Rotate a 2D Array (your code)', () => {
  tests(rotate2DArray)
})
