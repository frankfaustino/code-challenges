const solution = require('../solution')
const balancedBrackets = require('../balancedBrackets')

const tests = (func) => {
  test('Valid short code "()"', () => {
    expect(func('()')).toBe(true)
  })

  test('Valid longer code "([]{[]})[]{{}()}"', () => {
    expect(func('([]{[]})[]{{}()}')).toBe(true)
  })

  test('Mismatched opener and closer "([][]}"', () => {
    expect(func('([][]}')).toBe(false)
  })

  test('Missing closer "[[]()"', () => {
    expect(func('[[]()')).toBe(false)
  })

  test('Extra closer "[[]]())"', () => {
    expect(func('[[]]())')).toBe(false)
  })

  test('Empty string ""', () => {
    expect(func('')).toBe(true)
  })

  test('String with other characters "const obj = { x: someFunction() }"', () => {
    expect(func('const obj = { x: someFunction() }')).toBe(true)
  })
}

describe('Balanced Brackets — Solution', () => {
  tests(solution)
})

describe('Balanced Brackets — Your code', () => {
  tests(balancedBrackets)
})
