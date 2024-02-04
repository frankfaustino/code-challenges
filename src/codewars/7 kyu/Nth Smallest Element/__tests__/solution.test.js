const solution = require('../solution')

describe('Codewars — Nth Smallest Element (Array Series #4)', () => {
    test('Basic Tests',() => {
        expect(solution([3,1,2], 2)).toEqual(2)
        expect(solution([15,20,7,10,4,3], 3)).toEqual(7)
        expect(solution([-5,-1,-6,-18], 4)).toEqual(-1)
        expect(solution([-102,-16,-1,-2,-367,-9], 5)).toEqual(-2)
        expect(solution([2,169,13,-5,0,-1], 4)).toEqual(2)
        expect(solution([2,1,3,3,1,2], 3)).toEqual(2)
    })
})
