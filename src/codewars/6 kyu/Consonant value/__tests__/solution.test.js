const solution = require('../solution')

describe('Codewars — Consonant value', () => {
    test('Tests', () => {
        expect(solution('zodiac')).toEqual(26)
        expect(solution('chruschtschov')).toEqual(80)
        expect(solution('khrushchev')).toEqual(38)
        expect(solution('strength')).toEqual(57)
        expect(solution('catchphrase')).toEqual(73)
        expect(solution('twelfthstreet')).toEqual(103)
        expect(solution('mischtschenkoana')).toEqual(80)
        expect(solution('az')).toEqual(26)
    })
})

