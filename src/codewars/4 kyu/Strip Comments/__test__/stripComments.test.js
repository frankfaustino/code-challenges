const stripComments = require('../stripComments')

describe('Codewars — Strip Comments', () => {
  test('Test one', () => {
    const string = 'apples, pears # and bananas\ngrapes\nbananas !apples'
    const markers = ['#', '!']
    expect(stripComments(string, markers)).toEqual("apples, pears\ngrapes\nbananas")
  })
  test('Test two', () => {
    const string = 'Q @b\nu\ne -e f g'
    const markers = ['@', '-']
    expect(stripComments(string, markers)).toEqual('Q\nu\ne')
  })
})