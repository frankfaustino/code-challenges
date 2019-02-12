const minesweeper = require('../minesweeper')
const solution = require('../solution')

const tests = fn => {
  test('[[0, 0], [0, 1]], 3, 4', () => {
    expect(fn([[0, 0], [0, 1]], 3, 4)).toEqual([[-1, -1, 1, 0], [2, 2, 1, 0], [0, 0, 0, 0]])
  })
  test('[[0, 2], [2, 0]], 3, 3', () => {
    expect(fn([[0, 2], [2, 0]], 3, 3)).toEqual([[0, 1, -1], [1, 2, 1], [-1, 1, 0]])
  })
  test('[[0, 0], [0, 1], [1, 2]], 3, 4)', () => {
    expect(fn([[0, 0], [0, 1], [1, 2]], 3, 4)).toEqual([[-1, -1, 2, 1], [2, 3, -1, 1], [0, 1, 1, 1]])
  })
  test('[[1, 1], [1, 2], [2, 2], [4, 3]], 5, 5', () => {
    const result = [[1, 2, 2, 1, 0],
      [1, -1, -1, 2, 0],
      [1, 3, -1, 2, 0],
      [0, 1, 2, 2, 1],
      [0, 0, 1, -1, 1]]
    expect(fn([[1, 1], [1, 2], [2, 2], [4, 3]], 5, 5)).toEqual(result)
  })
}

describe('Common — Minesweeper (solution)', () => {
  tests(solution)
})

describe('Common — Minesweeper (your code)', () => {
  tests(minesweeper)
})

