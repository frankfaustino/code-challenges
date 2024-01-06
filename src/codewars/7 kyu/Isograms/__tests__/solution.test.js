const solution = require('../solution')

describe('Codewars — Isograms', () => {
    test('Tests', () => {
        expect(solution('Dermatoglyphics')).toEqual(true)
        expect(solution('moose')).toEqual(false)
        expect(solution('aba')).toEqual(false)
        expect(solution('isogram')).toEqual(true)
        expect(solution('moOse')).toEqual(false)
        expect(solution('isIsogram')).toEqual(false)
        expect(solution('')).toEqual(true)
    })
})
