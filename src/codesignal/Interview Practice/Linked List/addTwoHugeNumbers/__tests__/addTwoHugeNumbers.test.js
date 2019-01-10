const addTwoHugeNumbers = require('../addTwoHugeNumbers')

class ListNode {
  constructor(value = null) {
    this.value = value
    this.next = null
  }

  add(value) {
    let current = this
    while (current) {
      if (current.next) {
        current = current.next
      } else {
        current.next = new ListNode(value)
        break
      }
    }
  }
}

describe('Codesignal — addTwoHugeNumbers', () => {
  test('[9876, 5432, 1999] + [1, 8001] should equal [9876, 5434, 0]', () => {
    const a = new ListNode(9876)
    a.add(5432)
    a.add(1999)
    const b = new ListNode(1)
    b.add(8001)
    expect(addTwoHugeNumbers(a, b)).toEqual([9876, 5434, 0])
  })
  test('[123, 4, 5] + [100, 100, 100] should equal [223, 104, 105]', () => {
    const a = new ListNode(123)
    a.add(4)
    a.add(5)
    const b = new ListNode(100)
    b.add(100)
    b.add(100)
    expect(addTwoHugeNumbers(a, b)).toEqual([223, 104, 105])
  })
  test('[0] + [0] should equal [0]', () => {
    const a = new ListNode(0)
    const b = new ListNode(0)
    expect(addTwoHugeNumbers(a, b)).toEqual([0])
  })
  test('[1234, 1234, 0] + [0] should equal [1234, 1234, 0]', () => {
    const a = new ListNode(1234)
    a.add(1234)
    a.add(0)
    const b = new ListNode(0)
    expect(addTwoHugeNumbers(a, b)).toEqual([1234, 1234, 0])
  })
  test('[0] + [1234, 1234, 0] should equal [1234, 1234, 0]', () => {
    const a = new ListNode(0)
    const b = new ListNode(1234)
    b.add(1234)
    b.add(0)
    expect(addTwoHugeNumbers(a, b)).toEqual([1234, 1234, 0])
  })
  test('[1] + [9998, 9999, 9999, 9999, 9999, 9999, 9999] should equal [9999, 0, 0, 0, 0, 0]', () => {
    const a = new ListNode(1)
    const b = new ListNode(9998)
    b.add(9999)
    b.add(9999)
    b.add(9999)
    b.add(9999)
    b.add(9999)
    expect(addTwoHugeNumbers(a, b)).toEqual([9999, 0, 0, 0, 0, 0])
  })
  test('[1] + [9999, 9999, 9999, 9999, 9999, 9999, 9999] should equal [1, 0, 0, 0, 0, 0, 0]', () => {
    const a = new ListNode(1)
    const b = new ListNode(9999)
    b.add(9999)
    b.add(9999)
    b.add(9999)
    b.add(9999)
    b.add(9999)
    expect(addTwoHugeNumbers(a, b)).toEqual([1, 0, 0, 0, 0, 0, 0])
  })
  test('[8339, 4510] + [2309] should equal [8339, 6819]', () => {
    const a = new ListNode(8339)
    a.add(4510)
    const b = new ListNode(2309)
    expect(addTwoHugeNumbers(a, b)).toEqual([8339, 6819])
  })
})
