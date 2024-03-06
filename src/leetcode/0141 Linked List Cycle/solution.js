// Source : https://leetcode.com/problems/linked-list-cycle
// Author : Frank Faustino
// Date   : 2024-03-05
// Tags   : linked-list

// Floyd's Tortoise and Hare algorithm
// Time complexity  : O(n)
// Space complexity : O(1)
function hasCycle(head) {
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) return true
    }

    return false
}

module.exports = hasCycle

