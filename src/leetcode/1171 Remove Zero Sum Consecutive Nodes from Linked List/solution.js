// Source : https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list
// Author : Frank Faustino
// Date   : 2024-03-11
// Tags   : linked-list

// Time complexity  : O(n)
// Space complexity : O(n)
function removeZeroSumSublists(node) {
    const head = { next: node }
    let sum = 0
    const map = new Map()
    map.set(sum, head)

    while (node) {
        sum += node.val

        if (!map.has(sum)) {
            map.set(sum, node)
            node = node.next
            continue
        }

        let cur = sum
        const prev = map.get(sum)
        let target = prev.next

        while (target !== node) {
            cur += target.val
            map.delete(cur)
            target = target.next
        }

        node = node.next
        prev.next = node
    }

    return head.next
}

module.exports = removeZeroSumSublists

