const solution = require('../solution')

describe('Codewars — Transform To Prime', () => {
    test('Tests', () => {
        expect(solution([3,1,2])).toEqual(1)
        expect(solution([5,2])).toEqual(0)
        expect(solution([1,1,1])).toEqual(0)
        expect(solution([2,12,8,4,6])).toEqual(5)
        expect(solution([50,39,49,6,17,28])).toEqual(2)
    })
})

