const mergeTwoLinkedLists = require('../mergeTwoLinkedLists')

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

function linkedListToArray(linkedList) {
  const output = []

  while (linkedList) {
    if (typeof linkedList.value === 'number') {
      output.push(linkedList.value)
    }
    linkedList = linkedList.next
  }

  return output
}

describe('Codesignal — mergeTwoLinkedLists', () => {
  const a = new ListNode(1)
  a.add(2)
  a.add(3)
  const b = new ListNode(4)
  b.add(5)
  b.add(6)
  test('[1, 2, 3] + [4, 5, 6] should equal [1, 2, 3, 4, 5, 6]', () => {
    const result = linkedListToArray(mergeTwoLinkedLists(a, b))
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })
  test('[1, 1, 2, 4] + [0, 3, 5] should equal [0, 1, 1, 2, 3, 4, 5]', () => {
    const a = new ListNode(1)
    a.add(1)
    a.add(2)
    a.add(4)
    const b = new ListNode(0)
    b.add(3)
    b.add(5)
    const result = linkedListToArray(mergeTwoLinkedLists(a, b))
    expect(result).toEqual([0, 1, 1, 2, 3, 4, 5])
  })
  test('[5, 10, 15, 40] + [2, 3, 20] should equal [2, 3, 5, 10, 15, 20, 40]', () => {
    const a = new ListNode(5)
    a.add(10)
    a.add(15)
    a.add(40)
    const b = new ListNode(2)
    b.add(3)
    b.add(20)
    const result = linkedListToArray(mergeTwoLinkedLists(a, b))
    expect(result).toEqual([2, 3, 5, 10, 15, 20, 40])
  })
  test('[1, 1] + [2, 4] should equal [1, 1, 2, 4]', () => {
    const a = new ListNode(1)
    a.add(1)
    const b = new ListNode(2)
    b.add(4)
    const result = linkedListToArray(mergeTwoLinkedLists(a, b))
    expect(result).toEqual([1, 1, 2, 4])
  })
  test('[null] + [1, 1, 2, 2, 4, 4, 7, 7, 8] should equal [1, 1, 2, 2, 4, 7, 7, 8]', () => {
    const a = new ListNode()
    const b = new ListNode(1)
    b.add(1)
    b.add(2)
    b.add(2)
    b.add(4)
    b.add(7)
    b.add(7)
    b.add(8)
    const result = linkedListToArray(mergeTwoLinkedLists(a, b))
    expect(result).toEqual([1, 1, 2, 2, 4, 7, 7, 8])
  })
  test('[null] + [1, 1, 2, 2, 4, 4, 7, 7, 8] should equal [1, 1, 2, 2, 4, 7, 7, 8]', () => {
    const a = new ListNode()
    const b = new ListNode(1)
    b.add(1)
    b.add(2)
    b.add(2)
    b.add(4)
    b.add(7)
    b.add(7)
    b.add(8)
    const result = linkedListToArray(mergeTwoLinkedLists(a, b))
    expect(result).toEqual([1, 1, 2, 2, 4, 7, 7, 8])
  })
})
