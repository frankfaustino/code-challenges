const regex = require('../solution')

describe('Codewars — Regex Password Validation', () => {
    function doTest (string, expected) {
        const actual = regex.test(string)
        const log = `"${string}" is${expected ? '' : ' not'} a valid password\n`
        expect(actual).toEqual(expected)
        console.log(log)
    }
    test('Test', () => {
        doTest('fjd3IR9', true)
        doTest('ghdfj32', false)
        doTest('DSJKHD23', false)
        doTest('dsF43', false)
        doTest('4fdg5Fj3', true)
        doTest('DHSJdhjsU', false)
        doTest('fjd3IR9.', false)
        doTest('fjd3  IR9', false)
        doTest('djI38D55', true)
        doTest('djI3_8D55', false)
        doTest('djI38D55@@', false)
    })
})

