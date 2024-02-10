const solution = require('../solution')

describe('Codewars — Largest pair sum in array', () => {
    it('Test', () => {
        expect(solution([10,14,2,23,19])).toEqual(42)
        expect(solution([-100,-29,-24,-19,19])).toEqual(0)
        expect(solution([1,2,3,4,6,-1,2])).toEqual(10)
        expect(solution([-10, -8, -16, -18, -19])).toEqual(-18)
    })
})

