const solution = require('../solution')

describe('Codewars — Sum of Intervals', () => {
    test('should return the correct sum for non overlapping intervals', function(){
        const test1 = [[1,5]]
        const test2 = [[1,5],[6,10]]
        expect(solution(test1)).toEqual(4)
        expect(solution(test2)).toEqual(8)
    })

    test('should return the correct sum for overlapping intervals', function(){
        const test1 = [[1,5],[1,5]]
        const test2 = [[1,4],[7, 10],[3, 5]]
        expect(solution(test1)).toEqual(4)
        expect(solution(test2)).toEqual(7)
    })

    test('should return the correct sum for large intervals', function(){
        let intervals = [
          {intervals: [[-1e9, 1e9]], sum: 2e9},
          {intervals: [
            [0, 20],
            [-1e8, 10],
            [30, 40]
          ], sum: 1e8 + 30}
        ]
        for(let i = 0; i < intervals.length; i++){
            expect(solution(intervals[i].intervals)).toEqual(intervals[i].sum)
        }
    })
})

