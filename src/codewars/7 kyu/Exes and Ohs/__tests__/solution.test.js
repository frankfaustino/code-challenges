const solution = require('../solution')

describe('Codewars — Exes and Ohs', () => {
    it('Test', () => {
        expect(solution('xo')).toEqual(true)
        expect(solution('xxOo')).toEqual(true)
        expect(solution('xxxm')).toEqual(false)
        expect(solution('Oo')).toEqual(false)
        expect(solution('ooom')).toEqual(false)
    })
})

