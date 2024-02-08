const solution = require('../solution')

describe('Codewars — You\'re a square!', () => {
    it('Test', () => {
        expect(solution(-1)).toEqual(false) // -1: Negative numbers can't be square
        expect(solution( 0)).toEqual(true) // 0 is a square number (0 * 0)
        expect(solution( 3)).toEqual(false) // 3 is not a square number
        expect(solution( 4)).toEqual(true) // 4 is a square number (2 * 2)
        expect(solution(25)).toEqual(true) // 25 is a square number (5 * 5)
        expect(solution(26)).toEqual(false) // 26 is not a square number
    })
})

