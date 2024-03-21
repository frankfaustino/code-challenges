// Source : https://leetcode.com/problems/reverse-linked-list
// Author : Frank Faustino
// Date   : 2024-03-21
// Tags   : linked-list

// Time complexity  : O(n)
// Space complexity : O(1)
function reverseList(head) {
    let prev = null
    let curr = head
    let next = null

    while (curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}

// Time complexity  : O(n)
// Space complexity : O(n)
function reverseListRecursive(head) {
    if (!head || !head.next) {
        return head
    }

    const reversed = reverseListRecursive(head.next)
    head.next.next = head
    head.next = null

    return reversed
}

module.exports = {
    reverseList,
    reverseListRecursive
}

