const solution = require('../solution')

describe('Codewars — Vowel Count', () => {
    test('Simple tests', () => {
        expect(solution('abracadabra')).toEqual(5)
        expect(solution('pear tree')).toEqual(4)
        expect(solution('o a kak ushakov lil vo kashu kakao')).toEqual(13)
        expect(solution('my pyx')).toEqual(0)
    })
})
