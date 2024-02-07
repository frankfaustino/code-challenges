const solution = require('../solution')

describe('Codewars — Row Weights', () => {
    it('Testing for fixed tests', () => {
        expect(solution([80])).toEqual([80,0])
        expect(solution([100,50])).toEqual([100,50])
        expect(solution([50,60,70,80])).toEqual([120,140])
        expect(solution([13,27,49])).toEqual([62,27])
        expect(solution([70,58,75,34,91])).toEqual([236,92])
        expect(solution([29,83,67,53,19,28,96])).toEqual([211,164])
        expect(solution([0])).toEqual([0,0])
        expect(solution([100,51,50,100])).toEqual([150,151])
        expect(solution([39,84,74,18,59,72,35,61])).toEqual([207,235])
        expect(solution([0,1,0])).toEqual([0,1])
    })
})
