const solution = require('../solution')

describe('Codewars — Descending Order', () => {
    it('Test', () => {
        expect(solution(0)).toEqual(0)
        expect(solution(1)).toEqual(1)
        expect(solution(111)).toEqual(111)
        expect(solution(15)).toEqual(51)
        expect(solution(1021)).toEqual(2110)
        expect(solution(123456789)).toEqual(987654321)
    })
})

