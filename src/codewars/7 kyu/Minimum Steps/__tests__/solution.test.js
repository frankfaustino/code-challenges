const solution = require('../solution')

describe('Codewars — Minimum Steps (Array Series #6)', () => {
    test('Basic tests',() => {
      expect(solution([4,6,3], 7)).toEqual(1)
      expect(solution([10,9,9,8], 17)).toEqual(1)
      expect(solution([8,9,10,4,2], 23)).toEqual(3)
      expect(solution([19,98,69,28,75,45,17,98,67], 464)).toEqual(8)
      expect(solution([4,6,3], 2)).toEqual(0)
    })
})

