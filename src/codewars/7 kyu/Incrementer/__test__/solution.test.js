const solution = require('../solution')

describe('Codewars — Incrementer', () => {
    test('Basic Tests', () => {
        expect(solution([])).toEqual([])
        expect(solution([1, 2, 3])).toEqual([2, 4, 6])
        expect(solution([4, 6, 7, 1, 3])).toEqual([5, 8, 0, 5, 8])
        expect(solution([3, 6, 9, 8, 9])).toEqual([4, 8, 2, 2, 4])
        expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8])).toEqual([2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2])
    })
})
