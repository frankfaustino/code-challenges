const solution = require('../solution')

describe('Codewars — Counting Duplicates', () => {
    test('Tests', () => {
        expect(solution('')).toEqual(0)
        expect(solution('abcde')).toEqual(0)
        expect(solution('aabbcde')).toEqual(2)
        expect(solution('aabBcde')).toEqual(2) // case ignored
        expect(solution('Indivisibility')).toEqual(1)
        expect(solution('Indivisibilities')).toEqual(2)
    })
})

