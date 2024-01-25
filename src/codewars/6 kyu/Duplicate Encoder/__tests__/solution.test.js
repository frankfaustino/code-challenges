const solution = require('../solution')

describe('Codewars — Duplicate Encoder', () => {
    test('Tests', () => {
        expect(solution('din')).toEqual('(((')
        expect(solution('recede')).toEqual('()()()')
        expect(solution('Success')).toEqual(')())())')
        expect(solution('(( @')).toEqual('))((')
    })
})

