const solution = require('../solution')

describe('Codewars — Sort Numbers', () => {
    test('Simple tests', () => {
        expect(solution([1,2,3,10,5])).toEqual([1,2,3,5,10])
        expect(solution(null)).toEqual([])
        expect(solution([])).toEqual([])
        expect(solution([20, 2, 10])).toEqual([2,10,20])
        expect(solution([2, 20, 10])).toEqual([2,10,20])
    })
})
