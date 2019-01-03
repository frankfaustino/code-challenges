const Magic = require('../fluentCalculator')

const FluentCalculator = new Magic()

describe('Codewars — Fluent Calculator', () => {
  test('FluentCalculator values should resolve to primitive integers', () => {
    expect(FluentCalculator.zero).toBe(0)
    expect(FluentCalculator.one).toBe(1)
    expect(FluentCalculator.two).toBe(2)
    expect(FluentCalculator.ten).toBe(10)
  })
  test('FluentCalculator should execute arithmetic operations', () => {
    expect(FluentCalculator.zero.times.ten).toBe(0)
    expect(FluentCalculator.ten.dividedBy.two).toBe(5)
    expect(FluentCalculator.six.plus.four).toBe(10)
    expect(FluentCalculator.one.plus.two.plus.three.minus.seven).toBe(-1)
  })
})