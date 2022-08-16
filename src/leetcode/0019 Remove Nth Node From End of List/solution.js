/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    const tmpNode = new ListNode()
    tmpNode.next = head
    let pointerOne = tmpNode
    let pointerTwo = tmpNode
    let i = 1

    // advance the first pointer so that the gap
    // between pointer one and two are n nodes apart
    while (i <= n + 1) {
        pointerOne = pointerOne.next
        i++
    }

    // advance both pointers, while maintining the gap
    while (pointerOne) {
        pointerOne = pointerOne.next
        pointerTwo = pointerTwo.next
    }

    pointerTwo.next = pointerTwo.next.next
    return tmpNode.next
}

/* function removeNthFromEnd(head, n) {
    // let's determine the length of the array
    const arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    // remove nth from the end
    const filtered = arr.filter((_, i) => i !== (arr.length - n)).reverse()
    let i = 0
    let root = null
    // recreate the linked list
    while (i < filtered.length) {
        root = new ListNode(filtered[i], root)
        i++
    }

    return root
} */


class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

console.log(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 4)) // [1,3,4,5]
console.log(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)) // [1,2,3,5]
console.log(removeNthFromEnd(new ListNode(1, new ListNode(1)), 1)) // [1]
console.log(removeNthFromEnd(new ListNode(1), 1)) // []
console.log(removeNthFromEnd(new ListNode(3, new ListNode(7, new ListNode(9, new ListNode(3, new ListNode(5, new ListNode(8, new ListNode())))))), 4)) // [3,7,9,3,5,8]
