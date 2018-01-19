# Source : https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem
# Author : Frank Faustino
# Date   : 2019-01-19

"""
Print elements of a linked list on console
head input could be None as well for empty list
Node is defined as

class Node(object):

  def __init__(self, data=None, next_node=None):
      self.data = data
      self.next = next_node
"""

def print_list(head):
    current = head
    while current:
        print(current.data)
        current = current.next
