const solution = require('../solution')

describe('Codewars — Maximum Product', () => {
    it('Positive numbers', function() {
        expect(solution([5, 8])).toEqual(40)
        expect(solution([1, 2, 3])).toEqual(6)
        expect(solution([1, 5, 10, 9])).toEqual(90)
        expect(solution([4, 12, 3, 1, 5])).toEqual(48)
        expect(solution([5, 1, 2, 3, 1, 4])).toEqual(6)
    })

    it('Both positive and negative values', function() {
        expect(solution([3, 6, -2, -5, 7, 3])).toEqual(21)
        expect(solution([9, 5, 10, 2, 24, -1, -48])).toEqual(50)
        expect(solution([5, 6, -4, 2, 3, 2, -23])).toEqual(30)
        expect(solution([-23, 4, -5, 99, -27, 329, -2, 7, -921])).toEqual(-14)
        expect(solution([5, 1, 2, 3, 1, 4])).toEqual(6)
    })

    it('Contains zeroes', function() {
        expect(solution([1, 0, 1, 0, 1000])).toEqual(0)
        expect(solution([1, 2, 3, 0])).toEqual(6)
    })
})
