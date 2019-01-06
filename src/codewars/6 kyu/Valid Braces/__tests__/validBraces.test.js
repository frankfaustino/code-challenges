const validBraces = require('../validBraces')

describe('Codewars — Valid Braces', () => {
  test('Valid short code "()"', () => {
    expect(validBraces('()')).toBe(true)
  })

  test('Valid longer code "([]{[]})[]{{}()}"', () => {
    expect(validBraces('([]{[]})[]{{}()}')).toBe(true)
  })

  test('Mismatched opener and closer "([][]}"', () => {
    expect(validBraces('([][]}')).toBe(false)
  })

  test('Missing closer "[[]()"', () => {
    expect(validBraces('[[]()')).toBe(false)
  })

  test('Extra closer "[[]]())"', () => {
    expect(validBraces('[[]]())')).toBe(false)
  })

  test('Empty string ""', () => {
    expect(validBraces('')).toBe(true)
  })

  test('String with other characters "const obj = { x: somevalidBracestion() }"', () => {
    expect(validBraces('const obj = { x: somevalidBracestion() }')).toBe(true)
  })
})
