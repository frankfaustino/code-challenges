const numbersWithDigitInside = require('../solution')

describe('Codewars — Numbers with this digit inside', () => {
    test('Basic tests', () => {
        expect(numbersWithDigitInside(5, 6)).toEqual([0, 0, 0])
        expect(numbersWithDigitInside(1, 0)).toEqual([0, 0, 0])
        expect(numbersWithDigitInside(7, 6)).toEqual([1, 6, 6])
        expect(numbersWithDigitInside(11, 1)).toEqual([3, 22, 110])
        expect(numbersWithDigitInside(20, 0)).toEqual([2, 30, 200])
        expect(numbersWithDigitInside(44, 4)).toEqual([9, 286, 5955146588160])
    })
})
