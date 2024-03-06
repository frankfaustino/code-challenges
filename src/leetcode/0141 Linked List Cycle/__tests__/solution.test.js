const ListNode = require('../../../data_structures/LinkedListNode')
const solution = require('../solution')

describe('141. Linked List Cycle', () => {
    it('It should return true if there\'s a cycle in the linked list', () => {
        const head = new ListNode(3)
        head.next = new ListNode(2)
        head.next.next = new ListNode(0)
        head.next.next.next = new ListNode(-4)
        head.next.next.next.next = head.next
        expect(solution(head)).toEqual(true)
    })
    it('It should return false if there\'s no cycle in the linked list', () => {
        const head = new ListNode(3)
        head.next = new ListNode(2)
        head.next.next = new ListNode(0)
        head.next.next.next = new ListNode(-4)
        expect(solution(head)).toEqual(false)
    })
})

