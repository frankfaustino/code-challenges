const { sortStack, Stack } = require('../sortStack')

describe('Lambda School — Sort a Stack', () => {
  let s
  beforeAll(() => {
    s = new Stack()
  })

  test('[10, 4] sorted should equal [4, 10]', () => {
    s.push(10)
    s.push(4)
    expect(sortStack(s).storage).toEqual([4, 10])
  })

  test('[8, 5, 1, 6, 19, 4] sorted should equal [1, 4, 5, 6, 8, 19]', () => {
    s.push(8)
    s.push(5)
    s.push(1)
    s.push(6)
    s.push(19)
    s.push(4)
    expect(sortStack(s).storage).toEqual([1, 4, 5, 6, 8, 19])
  })
})