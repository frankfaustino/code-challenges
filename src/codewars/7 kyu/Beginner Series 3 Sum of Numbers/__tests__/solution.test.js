const solution = require('../solution')

describe('Codewars — Beginner Series #3 Sum of Numbers', () => {
    test('Simple tests', () => {
        expect(solution(1, 1)).toEqual(1)
        expect(solution(2, 2)).toEqual(2)
        expect(solution(0, 1)).toEqual(1)
        expect(solution(1, 0)).toEqual(1)
        expect(solution(0,-1)).toEqual(-1)
        expect(solution(1, 2)).toEqual(3)
        expect(solution(-1, 0)).toEqual(-1)
        expect(solution(-1, 2)).toEqual(2)
        expect(solution(1, 100)).toEqual(5050)
    })
})
