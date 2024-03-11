const ListNode = require('../../../data_structures/LinkedListNode')
const solution = require('../solution')

function getSum(head) {
    let sum = 0
    while (head) {
        sum += head.val
        head = head.next
    }
    return sum
}

describe('1171. Remove Zero Sum Consecutive Nodes from Linked List', () => {
    it('Test one', () => {
        const head = new ListNode(1)
        head.next = new ListNode(2)
        head.next.next = new ListNode(-3)
        head.next.next.next = new ListNode(3)
        head.next.next.next.next = new ListNode(1)
        const actual = getSum(solution(head))
        const expected = [3,1].reduce((a, b) => a + b, 0)
        expect(actual).toEqual(expected)
    })
    it('Test two', () => {
        const head = new ListNode(1)
        head.next = new ListNode(2)
        head.next.next = new ListNode(3)
        head.next.next.next = new ListNode(-3)
        head.next.next.next.next = new ListNode(4)
        const actual = getSum(solution(head))
        const expected = [1,2,4].reduce((a, b) => a + b, 0)
        expect(actual).toEqual(expected)
    })
    it('Test three', () => {
        const head = new ListNode(1)
        head.next = new ListNode(2)
        head.next.next = new ListNode(3)
        head.next.next.next = new ListNode(-3)
        head.next.next.next.next = new ListNode(-2)
        const actual = getSum(solution(head))
        expect(actual).toEqual(1)
    })
})

