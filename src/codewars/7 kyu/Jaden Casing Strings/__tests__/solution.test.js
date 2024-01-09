const _solution = require('../solution')

describe('Codewars — Jaden Casing Strings', () => {
    test('Tests', () => {
        let str = "How can mirrors be real if our eyes aren't real"
        expect(str.toJadenCase())
            .toEqual("How Can Mirrors Be Real If Our Eyes Aren't Real")
        str = 'most Trees Are Blue'
        expect(str.toJadenCase()).toEqual('Most Trees Are Blue')
    })
})

