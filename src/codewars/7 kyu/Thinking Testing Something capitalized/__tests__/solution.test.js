const solution = require('../solution')

describe('Codewars — Thinking & Testing : Something capitalized', () => {
    it('Test', () => {
        expect(solution('')).toEqual('')
        expect(solution('a')).toEqual('A')
        expect(solution('b')).toEqual('B')
        expect(solution('a a')).toEqual('A A')
        expect(solution('a b')).toEqual('A B')
        expect(solution('a b c')).toEqual('A B C')
        expect(solution('ab')).toEqual('aB')
        expect(solution('ab ab')).toEqual('aB aB')
        expect(solution('lktf hfqcw uhngg bjeod q')).toEqual('lktF hfqcW uhngG bjeoD Q')
    })
})

