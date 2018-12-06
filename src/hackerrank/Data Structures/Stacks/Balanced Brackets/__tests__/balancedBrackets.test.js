const solution = require('../solution')
// const isBalanced = require('../balancedBrackets')

const tests = (func) => {
  test('Valid short code "()"', () => {
    expect(func('()')).toBe('YES')
  })

  test('Valid longer code "([]{[]})[]{{}()}"', () => {
    expect(func('([]{[]})[]{{}()}')).toBe('YES')
  })

  test('Mismatched opener and closer "([][]}"', () => {
    expect(func('([][]}')).toBe('NO')
  })

  test('Missing closer "[[]()"', () => {
    expect(func('[[]()')).toBe('NO')
  })

  test('Extra closer "[[]]())"', () => {
    expect(func('[[]]())')).toBe('NO')
  })

  test('Empty string ""', () => {
    expect(func('')).toBe('YES')
  })

  test('String with other characters "const obj = { x: someFunction() }"', () => {
    expect(func('const obj = { x: someFunction() }')).toBe('YES')
  })
}

describe('Hackerrank: Data Structures — Balanced Brackets (solution)', () => {
  tests(solution)
})

// describe('Hackerrank: Data Structures — Balanced Brackets', () => {
//   tests(isBalanced)
// })