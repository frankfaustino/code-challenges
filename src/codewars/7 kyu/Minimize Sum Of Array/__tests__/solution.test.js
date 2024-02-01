const solution = require('../solution')

describe('Codewars — Minimize Sum Of Array (Array Series #1)', () => {
    test('should return the minimum sum', () => {
        expect(solution([5,4,2,3])).toEqual(22)
        expect(solution([12,6,10,26,3,24])).toEqual(342)
        expect(solution([9,2,8,7,5,4,0,6])).toEqual(74)
    })
})
