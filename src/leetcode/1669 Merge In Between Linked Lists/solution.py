# Source : https://leetcode.com/problems/merge-in-between-linked-lists
# Author : Frank Faustino
# Date   : 2024-03-19

from typing import List

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Time complexity  : O(n + m)
# Space complexity : O(1)
class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        list1_head = list1
        index = 0
        a_node = None
        b_node = None

        while list1:
            if index == a - 1:
                a_node = list1
            if index == b + 1:
                b_node = list1
            index += 1
            list1 = list1.next

        list2_head = list2

        while list2:
            if list2.next == None:
                list2.next = b_node
                break
            list2 = list2.next

        a_node.next = list2_head

        return list1_head

def list_to_linked_list(array):
    head = ListNode(array[0])
    current = head
    for i in range(1, len(array)):
        current.next = ListNode(array[i])
        current = current.next
    return head

def linked_list_to_list(head):
    array = []
    current = head
    while current:
        array.append(current.val)
        current = current.next
    return array

result = Solution().mergeInBetween(list1 = list_to_linked_list([0,1,2,3,4,5]), a = 3, b = 4, list2 = list_to_linked_list([1000000,1000001,1000002]))
print(linked_list_to_list(result)) # [0,1,2,1000000,1000001,1000002,5]

result = Solution().mergeInBetween(list1 = list_to_linked_list([0,1,2,3,4,5,6]), a = 2, b = 5, list2 = list_to_linked_list([1000000,1000001,1000002,1000003,1000004]))
print(linked_list_to_list(result)) # [0,1,1000000,1000001,1000002,1000003,1000004,6]

