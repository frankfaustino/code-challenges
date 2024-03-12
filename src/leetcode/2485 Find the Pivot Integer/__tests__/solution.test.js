const solution = require('../solution')

describe('2485. Find the Pivot Integer', () => {
    it('Basic tests', () => {
        expect(solution(8)).toEqual(6)
        expect(solution(1)).toEqual(1)
        expect(solution(4)).toEqual(-1)
    })
})

