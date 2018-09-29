# Source : https://leetcode.com/problems/add-two-numbers
# Author : Frank Faustino
# Date   : 2018-09-28

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# Solution:
class Solution:
    def iterate(self, node):
        while node:
            yield node
            node = node.next

    def addTwoNumbers(self, l1, l2):
        str1 = ''
        str2 = ''

        for i in self.iterate(l1):
          str1 = str(i.val) + str1

        for i in self.iterate(l2):
          str2 = str(i.val) + str2

        sum = int(str1) + int(str2)
        node = ListNode(sum % 10)
        head = node
        sum = sum // 10

        while sum > 0:
            new_node = ListNode(sum % 10)
            node.next = new_node
            node = new_node
            sum = sum // 10

        return head

# Test Cases:
def printSolution(node):
  while node:
    print(node.val)
    node = node.next

l1 = ListNode(1)
l1.next = ListNode(8)
l2 = ListNode(0)

printSolution(Solution().addTwoNumbers(l1, l2))
# 1 ➜ 8

l3 = ListNode(2)
l3.next = ListNode(4)
l3.next.next = ListNode(3)
l4 = ListNode(5)
l4.next = ListNode(6)
l4.next.next = ListNode(4)

printSolution(Solution().addTwoNumbers(l3, l4))
# 7 ➜ 0 ➜ 8