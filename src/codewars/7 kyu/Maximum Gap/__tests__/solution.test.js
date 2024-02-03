const solution = require('../solution')

describe('Codewars — Maximum Gap (Array Series #4)', () => {
    it('Testing for fixed tests', () => {
        expect(solution([13,10,2,9,5])).toEqual(4)
        expect(solution([13,3,5])).toEqual(8)
        expect(solution([24,299,131,14,26,25])).toEqual(168)
        expect(solution([-3,-27,-4,-2])).toEqual(23)
        expect(solution([-7,-42,-809,-14,-12])).toEqual(767)
        expect(solution([12,-5,-7,0,290])).toEqual(278)
        expect(solution([-54,37,0,64,-15,640,0])).toEqual(576)
        expect(solution([130,30,50])).toEqual(80)
        expect(solution([1,1,1])).toEqual(0)
        expect(solution([-1,-1,-1])).toEqual(0)
    })
})
