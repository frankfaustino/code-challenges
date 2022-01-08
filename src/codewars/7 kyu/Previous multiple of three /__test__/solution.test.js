const solution = require('../solution')

describe('Codewars — Previous multiple of three', () => {
    test('Simple tests', () => {
        expect(solution(1)).toEqual(null)
        expect(solution(25)).toEqual(null)
        expect(solution(36)).toEqual(36)
        expect(solution(1244)).toEqual(12)
        expect(solution(952406)).toEqual(9)
    })
})
