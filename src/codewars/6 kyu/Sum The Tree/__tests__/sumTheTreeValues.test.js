const sumTheTreeValues = require('../sumTheTreeValues')

describe('Simple Test', () => {
  const simpleNode = {
    value: 10,
    left: { value: 1, left: null, right: null },
    right: { value: 2, left: null, right: null }
  }
  test('Sums up all children', () => {
    expect(sumTheTreeValues(simpleNode)).toEqual(13)
  })

  const unbalancedNode = {
    value: 11,
    left: { value: 0, left: null, right: null },
    right: {
      value: 0,
      left: null,
      right: { value: 1, left: null, right: null }
    }
  }
  test('Handles unbalanced trees', () => {
    expect(sumTheTreeValues(unbalancedNode)).toEqual(12)
  })
})
