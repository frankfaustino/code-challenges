const solution = require('../solution')

describe('Codewars — Reverse words', () => {
    test('Simple tests', () => {
        expect(solution('The quick brown fox jumps over the lazy dog.')).toEqual('ehT kciuq nworb xof spmuj revo eht yzal .god')
        expect(solution('apple')).toEqual('elppa')
        expect(solution('a b c d')).toEqual('a b c d')
        expect(solution('double  spaced  words')).toEqual('elbuod  decaps  sdrow')
    })
})
