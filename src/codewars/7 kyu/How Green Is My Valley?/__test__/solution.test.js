const solution = require('../solution')

describe('Codewars — makeValley',() => {
    test('Simple tests', () => {
        expect(solution([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1])).toEqual([17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17])
        expect(solution([20, 7, 6, 2])).toEqual([20, 6, 2, 7])
        expect(solution([14, 10, 8])).toEqual([14, 8, 10])
        expect(solution([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1])).toEqual([20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18])
        expect(solution([20, 16, 14, 10, 1])).toEqual([20, 14, 1, 10, 16])
        expect(solution([19, 19, 18, 14, 12, 11, 9, 7, 4])).toEqual([19, 18, 12, 9, 4, 7, 11, 14, 19])
        expect(solution([20, 18, 16, 15, 14, 14, 13, 13, 10, 9, 4, 4, 4, 1])).toEqual([20, 16, 14, 13, 10, 4, 4, 1, 4, 9, 13, 14, 15, 18])
        expect(solution([20, 20, 16, 14, 12, 12, 11, 10, 3, 2])).toEqual([20, 16, 12, 11, 3, 2, 10, 12, 14, 20])
        expect(solution([19, 17, 16, 15, 13, 8, 5, 5, 4, 4, 4])).toEqual([19, 16, 13, 5, 4, 4, 4, 5, 8, 15, 17])
        expect(solution([19, 8, 6])).toEqual([19, 6, 8])
    })
    test('More tests', () => {
        expect(solution([])).toEqual([])
        expect(solution([18, 16, 16, 16, 12, 10, 9, 6, 4, 4, 3, 3, 3, 1])).toEqual([18, 16, 12, 9, 4, 3, 3, 1, 3, 4, 6, 10, 16, 16])
        expect(solution([18, 16, 15, 8])).toEqual([18, 15, 8, 16])
        expect(solution([17, 17, 17, 10, 7, 7, 4])).toEqual([17, 17, 7, 4, 7, 10, 17])
        expect(solution([17, 16, 2])).toEqual([17, 2, 16])
        expect(solution([14, 13, 11, 10, 7, 5, 1])).toEqual([14, 11, 7, 1, 5, 10, 13])
        expect(solution([17, 14, 13, 11, 7, 4])).toEqual([17, 13, 7, 4, 11, 14])
        expect(solution([18, 15, 13, 10])).toEqual([18, 13, 10, 15])
        expect(solution([20, 15, 12, 12, 12, 11, 10, 10, 10, 8, 7, 6, 6, 4, 2])).toEqual([20, 12, 12, 10, 10, 7, 6, 2, 4, 6, 8, 10, 11, 12, 15])
        expect(solution([17, 17, 16, 14, 14, 13, 7, 4, 4])).toEqual([17, 16, 14, 7, 4, 4, 13, 14, 17])
    })
})
