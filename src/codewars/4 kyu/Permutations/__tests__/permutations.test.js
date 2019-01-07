const permutations = require('../permutations')

describe('Codewars — Permutations', () => {
  test('Test unique letters', () => {
    expect(permutations('a')).toEqual(['a'])
    expect(permutations('ab').sort()).toEqual(['ab', 'ba'])
    expect(permutations('abc').sort()).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
    const result = ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba']
    expect(permutations('abcd').sort()).toEqual(result)
    expect(permutations('bcad').sort()).toEqual(result)
    expect(permutations('dcba').sort()).toEqual(result)
  })
  test('Test duplicate letters', () => {
    expect(permutations('aabb').sort()).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])
    expect(permutations('aa').sort()).toEqual(['aa'])
    expect(permutations('aaaab').sort()).toEqual(['aaaab', 'aaaba', 'aabaa', 'abaaa', 'baaaa'])
  })
})
