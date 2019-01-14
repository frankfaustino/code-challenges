const hasPathWithGivenSum = require('../hasPathWithGivenSum')

describe('Codesignal — hasPathWithGivenSum', () => {
  test('Tree with path that equal sum', () => {
    const t = {
      value: 4,
      left: {
        value: 1,
        left: {
          value: -2,
          left: null,
          right: {
            value: 3,
            left: null,
            right: null
          }
        },
        right: null
      },
      right: {
        value: 3,
        left: {
          value: 1,
          left: null,
          right: null
        },
        right: {
          value: 2,
          left: {
            value: -2,
            left: null,
            right: null
          },
          right: {
            value: -3,
            left: null,
            right: null
          }
        }
      }
    }
    expect(hasPathWithGivenSum(t, 7)).toEqual(true)
  })
  test('Tree with no paths that equal sum', () => {
    const t = {
      value: 4,
      left: {
        value: 1,
        left: {
          value: -2,
          left: null,
          right: {
            value: 3,
            left: null,
            right: null
          }
        },
        right: null
      },
      right: {
        value: 3,
        left: {
          value: 1,
          left: null,
          right: null
        },
        right: {
          value: 2,
          left: {
            value: -4,
            left: null,
            right: null
          },
          right: {
            value: -3,
            left: null,
            right: null
          }
        }
      }
    }
    expect(hasPathWithGivenSum(t, 7)).toEqual(false)
  })
  test('null', () => {
    expect(hasPathWithGivenSum(null, 1)).toEqual(false)
  })
  test('Tree with no leaves', () => {
    const t = {
      value: 5,
      left: null,
      right: null
    }
    expect(hasPathWithGivenSum(t, 5)).toEqual(true)
    expect(hasPathWithGivenSum(t, -5)).toEqual(false)
    expect(hasPathWithGivenSum(t, 0)).toEqual(false)
  })
  test('Tree with one depth', () => {
    const t = {
      value: 8,
      left: null,
      right: {
        value: 3,
        left: null,
        right: null
      }
    }
    expect(hasPathWithGivenSum(t, 8)).toEqual(false)
  })
  test('Tree with one depth', () => {
    const t = {
      value: 5,
      left: {
        value: 7,
        left: null,
        right: null
      },
      right: null
    }
    expect(hasPathWithGivenSum(t, 8)).toEqual(false)
  })
})
