const click = require('../expand')
const solution = require('../solution')

const tests = fn => { 
  const field = [[0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, -1, 1, 0]]

  const field2 = [[-1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, -1]]

  test('Clicking on a bomb should return the field unchanged', () => {
    const result = [ [ 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 0 ], [ 0, 1, -1, 1, 0 ] ]
    expect(fn(field, 3, 5, 2, 2)).toEqual(result)
  })

  test('Clicking on a cell surrounding a bomb should return the field unchanged', () => {
    const result = [ [ 0, 0, 0, 0, 0 ], [ 0, 1, 1, 1, 0 ], [ 0, 1, -1, 1, 0 ] ]
    expect(fn(field, 3, 5, 1, 1)).toEqual(result)
  })

  test('Clicking on an empty cell should mark all touching empty cells as -2', () => {
    const result = [ [ -2, -2, -2, -2, -2 ],
      [ -2, 1, 1, 1, -2 ],
      [ -2, 1, -1, 1, -2 ] ]
    expect(fn(field, 3, 5, 0, 1)).toEqual(result)
  })

  test('Clicking on an empty cell should mark all touching empty cells as -2', () => {
    const result = [ [ -1, 1, -2, -2 ],
      [ 1, 1, -2, -2 ],
      [ -2, -2, 1, 1 ],
      [ -2, -2, 1, -1 ] ]
    expect(fn(field2, 4, 4, 1, 2)).toEqual(result)
  })
}


describe('Common — Find Where to Expand in Minesweeper (solution)', () => {
  tests(solution)
})

describe('Common — Find Where to Expand in Minesweeper (your code)', () => {
  tests(click)
})
