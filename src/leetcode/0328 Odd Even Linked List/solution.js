import ListNode from '../../data_structures/LinkedListNode.js'

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Solution: group the odd nodes in a linked list, same for the even nodes.
 * then append the head of the even list to the tail of the odd list.
 * Space: O(1) uses the existing nodes
 * Time: O(N) must iterate over N nodes
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
    // catch edge case where input is null
    if (!head) return head

    let odd = head
    let even = head.next
    let evenHead = even

    // initial conditions rules out inputs with 1 or 2 nodes
    while (even && even.next) {
        // add next odd node as next
        odd.next = even.next
        // advance the odd list
        odd = odd.next
        // add next even node as next
        even.next = odd.next
        // advance the even list
        even = even.next
    }

    // append the head of the even list to the tail of the odd list
    odd.next = evenHead

    return head
}

// Tests
function makeLinkedList(arr) {
    let currNode = new ListNode(arr[0])
    const head = currNode

    for (let i = 1; i < arr.length; i++) {
        currNode.next = new ListNode(arr[i])
        currNode = currNode.next
    }

    return head
}

console.log(oddEvenList(makeLinkedList([1,2,3,4,5])), '[1,3,5,2,4]')
console.log(oddEvenList(makeLinkedList([2,1,3,5,6,4,7])), '[2,3,6,7,1,5,4]')

