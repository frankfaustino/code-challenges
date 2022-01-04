const solution = require('../solution')

describe('Codewars — Identical Elements', () => {
    test('Simple tests', () => {
        expect(solution([1, 2, 3, 4, 5], [1, 6, 7, 8, 9])).toBeTruthy()
        expect(solution([9, 8, 7], [8, 1, 3])).toBeTruthy()
    })
})
