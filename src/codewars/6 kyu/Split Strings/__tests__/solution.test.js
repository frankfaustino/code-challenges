const solution = require('../solution')

describe('Codewars — Split Strings', () => {
    test('Tests', () => {
        expect(solution('abcdef')).toEqual(['ab', 'cd', 'ef'])
        expect(solution('abcdefg')).toEqual(['ab', 'cd', 'ef', 'g_'])
        expect(solution('')).toEqual([])
    })
})

