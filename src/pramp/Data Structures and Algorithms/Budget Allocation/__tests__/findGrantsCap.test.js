const findGrantsCap = require('../findGrantsCap')
const solution = require('../solution')

const tests = fn => {
  test('grantsArray = [2, 100, 50, 120, 1000], newBudget = 190 | should equal 47', () => {
    expect(fn([2, 100, 50, 120, 1000], 190)).toEqual(47)
  })
  test('grantsArray = [2, 4], newBudget = 3 | should equal 1.5', () => {
    expect(fn([2, 4], 3)).toEqual(1.5)
  })
  test('grantsArray = [2, 100, 50, 120, 167], newBudget = 400 | should equal 128', () => {
    expect(fn([2, 100, 50, 120, 167], 400)).toEqual(128)
  })
  test('grantsArray = [2, 100, 50, 120, 1], newBudget = 120 | should equal 39', () => {
    expect(fn([2, 100, 50, 120, 1], 120)).toEqual(39)
  })
}

describe('Pramp — Budget Allocation (your code)', () => {
  tests(findGrantsCap)
})

describe('Pramp — Budget Allocation (solution code)', () => {
  tests(solution)
})