"""
ListNode keeps track of prev and next pointers, as well as its value.
"""

from utils import repr


class ListNode:
    def __init__(self, val, prev=None, next=None):
        self.prev = prev
        self.val = val
        self.next = next

    def __iter__(self):
        """__iter__ makes ListNode iterable"""
        node = self
        while node:
            yield node
            node = node.next

    def __repr__(self):
        """__repr__ returns a string representation of the DLL"""
        return repr(self)

    def insert_after(self, val):
        """
        1. Create new instance of ListNode with
        prev pointer set to current node and
        next pointer set to current node's next (which could be None).
        2. If current node has a next, we set that next node's
        prev pointer to our new node instance.
        3. Finally, set our current node's next pointer to our
        new node instance, which satisfies "insert after."
        """
        new_node = ListNode(val, self, self.next)
        if self.next:
            self.next.prev = new_node
        self.next = new_node

    def insert_before(self, val):
        """
        1. Keep a reference to previous prev.
        2. Then we set the current node's prev to the new ListNode.
          a. Set new ListNode's prev pointer to the current prev
          b. Set new ListNode's next pointer to the current node
        3. If there was a previous prev, we set its next
        pointer to the new ListNode.
        """
        current_prev = self.prev
        self.prev = ListNode(val, current_prev, self)
        if current_prev:
            current_prev.next = self.prev

    def delete(self):
        """
        1. To "delete" a node, we simply reassign its neighbors' pointers.
        2. Also, set its own prev and next pointers to None.
        """
        if self.prev:
            self.prev.next = self.next
        if self.next:
            self.next.prev = self.prev
        self.next = None
        self.prev = None
        return self.val

# one = ListNode('A')
# one.insert_after('F')
# one.insert_after('E')
# one.insert_after('D')
# one.insert_after('C')
# one.next.insert_before('B')
# print(one)
# one.delete()
# print(one)
