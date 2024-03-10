
const solution = require('../solution')

describe('Solution', () => {
    it('intersection', () => {
        expect(solution([1, 2, 2, 1], [2, 2])).toEqual([2])
        expect(solution([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9,4])
    })
})

