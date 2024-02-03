const solution = require('../solution')

describe('Codewars — Product Array (Array Series #5)', () => {
    test('Basic Tests',() =>{
        expect(solution([12,20])).toEqual([20,12])
        expect(solution([3,27,4,2])).toEqual([216,24,162,324])
        expect(solution([13,10,5,2,9])).toEqual([900,1170,2340,5850,1300])
        expect(solution([16,17,4,3,5,2])).toEqual([2040,1920,8160,10880,6528,16320])
    })
})
