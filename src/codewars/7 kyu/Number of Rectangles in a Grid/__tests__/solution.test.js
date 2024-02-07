const solution = require('../solution')

describe('Codewars — Number of Rectangles in a Grid', () => {
    test('Testing for fixed tests', () => {
        expect(solution(4, 4)).toEqual(100)
        expect(solution(5, 5)).toEqual(225)
    })
})

