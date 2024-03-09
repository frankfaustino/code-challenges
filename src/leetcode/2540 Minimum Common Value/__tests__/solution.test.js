const solution = require('../solution')

describe('2540. Minimum Common Value', () => {
    it('It should work for basic tests', () => {
        expect(solution([1,2,3], [2,4])).toEqual(2)
        expect(solution([1,2,3,6], [2,3,4,5])).toEqual(2)
        expect(solution([1,3,5,7,9,11,13,15,17,19,21], [2,4,6,8,10,12,14,16,18,20,21])).toEqual(21)
    })
    it('It should work for large test', () => {
        const nums1 = []
        const nums2 = []
        for (let i = 0; i < Math.pow(10, 5); i++) {
            if (i % 2 === 0) nums1.push(i)
            else nums2.push(i)
        }
        const lastNum = nums1[nums1.length - 1] + 1
        nums1.push(lastNum)
        expect(solution(nums1, nums2)).toEqual(lastNum)
    })
})

