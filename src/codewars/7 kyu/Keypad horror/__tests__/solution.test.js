const solution = require('../solution')

describe('Codewars — Keypad horror', () => {
    test('Simple tests', () => {
        expect(solution('0789456123')).toEqual('0123456789')
        expect(solution('000')).toEqual('000')
        expect(solution('94561')).toEqual('34567')
        expect(solution('')).toEqual('')
    })
})
