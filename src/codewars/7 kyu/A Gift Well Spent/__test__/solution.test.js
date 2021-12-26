const solution = require('../solution')

;((solution) => {
    describe('Codewars — A Gift Well Spent', () => {
        test('Simple tests', () => {
            expect(solution(2,[1,1])).toEqual([0,1])
            expect(solution(3,[1,1])).toEqual(null)
            expect(solution(5,[5,2,3,4,5])).toEqual([1,2])
        })
    })
})(solution)