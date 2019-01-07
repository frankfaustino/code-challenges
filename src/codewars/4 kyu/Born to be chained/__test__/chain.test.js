const chainES6 = require('../chain')
const chainES5 = require('../es5')

const sum = (x, y) => x + y
const double = x => sum(x, x)
const minus = (x, y) => x - y
const addOne = x => sum(x, 1)
const addOneArr = arr => arr.map(addOne)

const tests = fn => {
  describe('Codewars — Born to be chained', () => {
    const c = fn({ sum, minus, addOne, double, addOneArr })
    test('Simple tests — one function', () => {
      expect(c.sum(1, 5).execute()).toEqual(6)
    })
    test('Simple tests — two function', () => {
      expect(c.sum(1, 5).minus(7).execute()).toEqual(-1)
    })
    test('Simple tests — multiple functions', () => {
      expect(c.sum(1, 5).minus(7).double().sum(8).addOne().addOne().execute()).toEqual(8)
    })
    test('Re-use tests', () => {
      let c1 = c.sum(4, 5)
      let c2 = c1.sum(5)
      expect(c2.execute()).toEqual(14)
      c1 = c.sum(4, 5)
      c2 = c1.sum(5)
      expect(c1.execute()).toEqual(9)
      c1 = c.sum(4, 5)
      c2 = c1.sum(5)
      expect(c2.addOne().execute()).toEqual(15)
      c1 = c.sum(4, 5)
      c2 = c1.sum(5)
      expect(c2.execute()).toEqual(14)
      c1 = c.sum(4, 5)
      c2 = c1.sum(5)
      expect(c1.execute()).toEqual(9)
    })
    test('Complex objects chain', () => {
      expect(c.addOneArr([1, 2, 3]).execute()).toEqual([2, 3, 4])
      expect(c.addOneArr([1, 2, 3]).addOneArr().execute()).toEqual([3, 4, 5])
    })
  })
}

tests(chainES6)
tests(chainES5)