const traverseTree = require('../traverseTree')

describe('codesignal: Interview Practice — Traverse Tree', () => {
  test('One', () => {
    const t = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: {
          value: 3,
          left: null,
          right: null
        }
      },
      right: {
        value: 4,
        left: {
          value: 5,
          left: null,
          right: null
        },
        right: null
      }
    }
    expect(traverseTree(t)).toEqual([1, 2, 4, 3, 5])
  })
  test('Two', () => {
    const t = null
    expect(traverseTree(t)).toEqual([])
  })
  test('Three', () => {
    const t = {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: {
          value: 0,
          left: null,
          right: null
        }
      },
      right: null
    }
    expect(traverseTree(t)).toEqual([2, 1, 0])
  })
  test('Four', () => {
    const t = {
      value: 15,
      left: {
        value: 15,
        left: null,
        right: null
      },
      right: null
    }
    expect(traverseTree(t)).toEqual([15, 15])
  })
})
