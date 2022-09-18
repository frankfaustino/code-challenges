import ListNode from '../../data_structures/LinkedListNode.js'

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
    let fast = head
    let slow = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    
    return slow
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

console.log(middleNode(makeLinkedList([1,2,3,4,5])), 'should be 3')
console.log(middleNode(makeLinkedList([1,2,3,4,5,6])), 'should be 4')
