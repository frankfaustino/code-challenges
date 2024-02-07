const solution = require('../solution')

describe('Codewars — Form The Minimum', () => {
    it('Testing for fixed tests', () => {
        expect(solution([1, 3, 1])).toEqual(13)
        expect(solution([4, 7, 5, 7])).toEqual(457)
        expect(solution([4, 8, 1, 4])).toEqual(148)
        expect(solution([5, 7, 9, 5, 7])).toEqual(579)
        expect(solution([6, 7, 8, 7, 6, 6])).toEqual(678)
        expect(solution([5, 6, 9, 9, 7, 6, 4])).toEqual(45679)
        expect(solution([1, 9, 1, 3, 7, 4, 6, 6, 7])).toEqual(134679)
        expect(solution([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])).toEqual(356789)
        expect(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual(1)
    })
})
