const solution = require('../solution')

describe('Codewars — Product Of Maximums Of Array (Array Series #2)', () => {
    test('Basic tests', () => {
		expect(solution([4,3,5], 2)).toEqual(20)
		expect(solution([10,8,7,9], 3)).toEqual(720)
		expect(solution([8,6,4,6], 3)).toEqual(288)
		expect(solution([10,2,3,8,1,10,4], 5)).toEqual(9600)
		expect(solution([13,12,-27,-302,25,37,133,155,-14], 5)).toEqual(247895375)
		expect(solution([-4,-27,-15,-6,-1], 2)).toEqual(4)
		expect(solution([-17,-8,-102,-309], 2)).toEqual(136)
		expect(solution([10,3,-27,-1], 3)).toEqual(-30)
		expect(solution([14,29,-28,39,-16,-48], 4)).toEqual(-253344)
		expect(solution([1], 1)).toEqual(1)
    })
})
