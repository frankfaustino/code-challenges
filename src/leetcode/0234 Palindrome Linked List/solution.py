# Source : https://leetcode.com/problems/palindrome-linked-list
# Author : Frank Faustino
# Date   : 2024-03-21
# Tags   : linked-list, two-pointers, stack, recursion
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Time complexity  : O(n)
# Space complexity : O(n)
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        list = []

        while head:
            list.append(head.val)
            head = head.next
        
        i = 0
        j = len(list) - 1

        while i < j:
            if list[i] != list[j]: return False
            i += 1
            j -= 1

        return True

# Tests
def list_to_linked_list(array):
    head = ListNode(array[0])
    current = head
    for i in range(1, len(array)):
        current.next = ListNode(array[i])
        current = current.next
    return head

print(Solution().isPalindrome(head = list_to_linked_list([1,2,2,1]))) # True
print(Solution().isPalindrome(head = list_to_linked_list([1,2]))) # False
