const isListPalindrome = require('../isListPalindrome')

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

describe('Codesignal — isListPalindrome', () => {
  test('[0, 1, 0] should be true', () => {
    const node = new ListNode(0)
    node.add(1)
    node.add(0)
    expect(isListPalindrome(node)).toEqual(true)
  })
  test('[1, 2, 2, 3] should be false', () => {
    const node = new ListNode(1)
    node.add(2)
    node.add(2)
    node.add(3)
    expect(isListPalindrome(node)).toEqual(false)
  })
  test('[1, 1000000000, -1000000000, -1000000000, 1000000000, 1] should be true', () => {
    const node = new ListNode(1)
    node.add(1000000000)
    node.add(-1000000000)
    node.add(-1000000000)
    node.add(1000000000)
    node.add(1)
    expect(isListPalindrome(node)).toEqual(true)
  })
  test('[1, 2, 3, 2] should be false', () => {
    const node = new ListNode(1)
    node.add(2)
    node.add(3)
    node.add(3)
    node.add(2)
    expect(isListPalindrome(node)).toEqual(false)
  })
  test('[1, 2, 3, 1, 2, 3] should be false', () => {
    const node = new ListNode(1)
    node.add(2)
    node.add(3)
    node.add(1)
    node.add(2)
    node.add(3)
    expect(isListPalindrome(node)).toEqual(false)
  })
  test('[] should be true', () => {
    const node = new ListNode()
    expect(isListPalindrome(node)).toEqual(true)
  })
  test('[0, 0] should be true', () => {
    const node = new ListNode(0)
    node.add(0)
    expect(isListPalindrome(node)).toEqual(true)
  })
  test('[10] should be true', () => {
    const node = new ListNode(10)
    expect(isListPalindrome(node)).toEqual(true)
  })
})