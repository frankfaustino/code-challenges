const { reverseList, reverseListRecursive } = require('../solution.js')
const Node = require('../../../data_structures/LinkedListNode.js')

function linkedListToArray(head) {
    const array = []

    while (head) {
        array.push(head.val)
        head = head.next
    }

    return array
}

describe('LeetCode - 206. Reverse Linked List', () => {
    test('Case 1', () => {
        const node = new Node(1)
        node.next = new Node(2)
        node.next.next = new Node(3)
        node.next.next.next = new Node(4)
        node.next.next.next.next = new Node(5)

        const list = reverseList(node)
        expect(linkedListToArray(list)).toEqual([5, 4, 3, 2, 1])
    })

    test('Case 2', () => {
        const node = new Node(1)
        node.next = new Node(2)

        const list = reverseList(node)
        expect(linkedListToArray(list)).toEqual([2, 1])
    })

    test('Case 3', () => {
        const list = reverseList(null)
        expect(linkedListToArray(list)).toEqual([])
    })

    test('Case 1 - recursive', () => {
        const node = new Node(1)
        node.next = new Node(2)
        node.next.next = new Node(3)
        node.next.next.next = new Node(4)
        node.next.next.next.next = new Node(5)

        const list = reverseListRecursive(node)
        expect(linkedListToArray(list)).toEqual([5, 4, 3, 2, 1])
    })

    test('Case 2 - recursive', () => {
        const node = new Node(1)
        node.next = new Node(2)

        const list = reverseListRecursive(node)
        expect(linkedListToArray(list)).toEqual([2, 1])
    })

    test('Case 3 - recursive', () => {
        const list = reverseListRecursive(null)
        expect(linkedListToArray(list)).toEqual([])
    })
})

