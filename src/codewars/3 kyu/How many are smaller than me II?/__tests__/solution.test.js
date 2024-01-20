const solution = require('../solution')

describe('Codewars — How many are smaller than me II?', () => {
    test('Simple tests', () => {
        expect(solution([5, 4, 3, 2, 1])).toEqual([4, 3, 2, 1, 0])
        expect(solution([1, 2, 3])).toEqual([0, 0, 0])
        expect(solution([1, 2, 0])).toEqual([1, 1, 0])
        expect(solution([1, 2, 1])).toEqual([0, 1, 0])
        expect(solution([1, 1, -1, 0, 0])).toEqual([3, 3, 0, 0, 0])
        expect(solution([5, 4, 7, 9, 2, 4, 4, 5, 6])).toEqual([4, 1, 5, 5, 0, 0, 0, 0, 0])
        expect(solution([5, 4, 7, 9, 2, 4, 1, 4, 5, 6])).toEqual([5, 2, 6, 6, 1, 1, 0, 0, 0, 0])
    })
})

