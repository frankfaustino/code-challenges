const {
  isTreeSymmetric,
  isTreeSymmetricRecursive
} = require('../isTreeSymmetric')

const tests = fn => {
  test('Symmetric tree', () => {
    const t = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 3,
          left: null,
          right: null
        },
        right: {
          value: 4,
          left: null,
          right: null
        }
      },
      right: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 3,
          left: null,
          right: null
        }
      }
    }
    expect(fn(t)).toEqual(true)
  })
  test('Asymmetric tree', () => {
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
        value: 2,
        left: null,
        right: {
          value: 3,
          left: null,
          right: null
        }
      }
    }
    expect(fn(t)).toEqual(false)
  })
  test('null', () => {
    expect(fn(null)).toEqual(true)
  })
  test('Asymmetric tree', () => {
    const t = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 1,
          left: {
            value: 2,
            left: null,
            right: null
          },
          right: {
            value: 3,
            left: null,
            right: null
          }
        },
        right: null
      },
      right: {
        value: 2,
        left: null,
        right: {
          value: 3,
          left: null,
          right: {
            value: 1,
            left: null,
            right: {
              value: 2,
              left: null,
              right: null
            }
          }
        }
      }
    }
    expect(fn(t)).toEqual(false)
  })
  test('Asymmetric tree', () => {
    const t = {
      value: 100,
      left: null,
      right: {
        value: 100,
        left: null,
        right: null
      }
    }
    expect(fn(t)).toEqual(false)
  })
}

describe('Codesignal — isTreeSymmetric (iterative)', () => {
  tests(isTreeSymmetric)
})
describe('Codesignal — isTreeSymmetric (recursive)', () => {
  tests(isTreeSymmetricRecursive)
})
