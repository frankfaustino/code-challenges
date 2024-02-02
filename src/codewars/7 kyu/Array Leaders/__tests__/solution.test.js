const solution = require('../solution')

describe('Codewars — Array Leaders (Array Series #3)', () => {
    test('Positive Values', function(){
    	expect(solution([1,2,3,4,0])).toEqual([4])
    	expect(solution([16,17,4,3,5,2])).toEqual([17,5,2])
    })
    test('Negative Values', function(){
    	expect(solution([-1,-29,-26,-2])).toEqual([-1])
    	expect(solution([-36,-12,-27])).toEqual( [-36,-12])
    })
    test('Mixed Values', function(){
    	expect(solution([5,-2,2])).toEqual([5,2])
    	expect(solution([0,-1,-29,3,2])).toEqual( [0,-1,3,2])
    })
})
