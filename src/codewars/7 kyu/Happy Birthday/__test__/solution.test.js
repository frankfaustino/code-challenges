const solution = require('../solution')

describe('Codewars — Happy Birthday',() => {
    test('Simple tests', () => {
        expect(solution(17, 32, 11)).toEqual(162)
        expect(solution(13, 13, 13)).toEqual(124)
        expect(solution(1, 3, 1)).toEqual(32)
    })
    test('More tests', () => {
        expect(solution(77, 85, 4)).toEqual(360)
        expect(solution(156, 132, 19)).toEqual(672)
        expect(solution(104, 100, 196)).toEqual(1020)
    })
})
