const rot13 = require('../rot13')
const solution = require('../solution')

const tests = fn => {
  test('test', () => {
    expect(fn('test')).toEqual('grfg')
  })
  test('Test', () => {
    expect(fn('Test')).toEqual('Grfg')
  })
  test('Codewars', () => {
    expect(fn('Codewars')).toEqual('Pbqrjnef')
  })
  test('Ruby is cool!', () => {
    expect(fn('Ruby is cool!')).toEqual('Ehol vf pbby!')
  })
  test('10+2 is twelve.', () => {
    expect(fn('10+2 is twelve.')).toEqual('10+2 vf gjryir.')
  })
  test('abcdefghijklmnopqrstuvwxyz', () => {
    expect(fn('abcdefghijklmnopqrstuvwxyz')).toEqual('nopqrstuvwxyzabcdefghijklm')
  })
  test('69ax', () => {
    expect(fn('69ax')).toEqual('69nk')
  })
  test('efewf', () => {
    expect(fn('efewf')).toEqual('rsrjs')
  })
  test('63vexb', () => {
    expect(fn('63vexb')).toEqual('63irko')
  })
  test('1pyco', () => {
    expect(fn('1pyco')).toEqual('1clpb')
  })
  test('7cnjn', () => {
    expect(fn('7cnjn')).toEqual('7pawa')
  })
}

describe('Codewars — ROT13 (solution)', () => {
  tests(solution)
})

describe('Codewars — ROT13 (your code)', () => {
  tests(rot13)
})