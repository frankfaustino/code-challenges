const snail = require('../snail')

describe('Codewars — Snail', () => {
  test('Empty array', () => {
    expect(snail([])).toEqual([])
  })
  test('0x0 matrix', () => {
    expect(snail([[]])).toEqual([])
  })
  test('1x1 matrix', () => {
    expect(snail([[1], [2]])).toEqual([1, 2])
  })
  test('2x2 matrix', () => {
    expect(snail([[1, 2], [4, 3]])).toEqual([1, 2, 3, 4])
  })
  test('3x3 matrix', () => {
    const array = [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
    const flat = array.flat().sort()
    expect(snail(array)).toEqual(flat)
  })
  test('4x4 matrix', () => {
    const array = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7]
    ]
    const flat = array.flat().sort((a, b) => a - b)
    expect(snail(array)).toEqual(flat)
  })
  test('5x5 matrix', () => {
    const array = [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9]
    ]
    const flat = array.flat().sort((a, b) => a - b)
    expect(snail(array)).toEqual(flat)
  })
  test('6x6 matrix', () => {
    const array = [
      [1, 2, 3, 4, 5, 6],
      [20, 21, 22, 23, 24, 7],
      [19, 32, 33, 34, 25, 8],
      [18, 31, 36, 35, 26, 9],
      [17, 30, 29, 28, 27, 10],
      [16, 15, 14, 13, 12, 11]
    ]
    const flat = array.flat().sort((a, b) => a - b)
    expect(snail(array)).toEqual(flat)
  })
})
