const largestValuesInTreeRows = require('../largestValuesInTreeRows')

describe('', () => {
  test('', () => {
    const t = {
      value: -1,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: {
        value: 7,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null
        }
      }
    }
    expect(largestValuesInTreeRows(t)).toEqual([-1, 7, 1])
  })
  test('', () => {
    expect(largestValuesInTreeRows(null)).toEqual([])
  })
  test('', () => {
    const t = {
      value: -1,
      left: null,
      right: null
    }
    expect(largestValuesInTreeRows(t)).toEqual([-1])
  })
  test('', () => {
    const t = {
      value: -1,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: {
        value: 7,
        left: null,
        right: {
          value: 1,
          left: {
            value: 5,
            left: null,
            right: null
          },
          right: null
        }
      }
    }
    expect(largestValuesInTreeRows(t)).toEqual([-1, 7, 1, 5])
  })
  test('', () => {
    const t = {
      value: -1,
      left: {
        value: 5,
        left: {
          value: -1,
          left: {
            value: 10,
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: {
        value: 7,
        left: null,
        right: {
          value: 1,
          left: {
            value: 5,
            left: null,
            right: null
          },
          right: null
        }
      }
    }
    expect(largestValuesInTreeRows(t)).toEqual([-1, 7, 1, 10])
  })
})
