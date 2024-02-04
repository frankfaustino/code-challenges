const solution = require('../solution')

describe('Codewars — Maximum Triplet Sum (Array Series #7)', () => {
    test('Basic Tests',() => {
        expect(solution([3,2,6,8,2,3])).toEqual(17)
        expect(solution([2,9,13,10,5,2,9,5])).toEqual(32)
        expect(solution([2,1,8,0,6,4,8,6,2,4])).toEqual(18)
        expect(solution([-3,-27,-4,-2,-27,-2])).toEqual(-9)
        expect(solution([-14,-12,-7,-42,-809,-14,-12])).toEqual(-33)
        expect(solution([-13,-50,57,13,67,-13,57,108,67])).toEqual(232)
        expect(solution([-7,12,-7,29,-5,0,-7,0,0,29])).toEqual(41)
        expect(solution([-2,0,2])).toEqual(0)
        expect(solution([-2,-4,0,-9,2])).toEqual(0)
        expect(solution([-5,-1,-9,0,2])).toEqual(1)
    })
})
