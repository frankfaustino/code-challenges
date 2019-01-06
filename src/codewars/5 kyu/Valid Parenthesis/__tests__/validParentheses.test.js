const validParentheses = require('../validParentheses')

describe('Codewars — Valid Parenthesis', () => {
  test('Valid short code "()"', () => {
    expect(validParentheses('()')).toBe(true)
  })

  test('Valid longer code "(())()()()(())"', () => {
    expect(validParentheses('(())()()()(())')).toBe(true)
  })

  test('Missing closer "((())"', () => {
    expect(validParentheses('((())')).toBe(false)
  })

  test('Extra closer "())"', () => {
    expect(validParentheses('())')).toBe(false)
  })

  test('Empty string ""', () => {
    expect(validParentheses('')).toBe(true)
  })

  test('String with other characters "const obj = { x: somevalidParenthesestion() }"', () => {
    expect(validParentheses('const obj = { x: somevalidParenthesestion() }')).toBe(true)
  })
})
