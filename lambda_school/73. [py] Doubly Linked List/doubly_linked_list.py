"""
DoublyLinkedList keeps track of the head and tail of a Linked List.
"""

from utils import repr
from list_node import ListNode


class DoublyLinkedList():
    def __init__(self, node=None):
        self.head = node
        self.tail = node

    def __iter__(self):
        node = self.head
        while node:
            yield node
            node = node.next

    def __repr__(self):
        return repr(self)

    def add_to_head(self, val):
        """
        1. Create new instance of ListNode.
            a. Set its next pointer to the current head.
        2. Check if head already exists.
            a. If true reassign its prev pointer to the new ListNode.
        3. Otherwise, that means no head exists, so
        assign the new ListNode to head and tail.
        """
        new_node = ListNode(val, next=self.head)
        if self.head:
            self.head.prev = new_node
        else:
            self.tail = new_node
        self.head = new_node

    def remove_from_head(self):
        """
        1. Check if head and tail exists. Return None if not.
        2. If tail exists but head doesn't, remove it.
        3. Otherwise
            a. Keep a reference of head.
            b. Reassign pointers to "delete" the head node.
        4. Return its val.
        """
        if not self.head:
            if not self.tail:
                return None
            return self.remove_from_tail()
        else:
            current_head = self.head
            self.head = self.head.next
            self.head.prev = None
            return current_head.val

    def add_to_tail(self, val):
        """
        1. Check if tail doesn't exist.
            a. If true, add a new instance of ListNode to tail.
        2. If tail exists but head doesn't exist,
            a. Assign the tail to the head.
            b. Replace current tail with new instance of ListNode.
            c. Set prev pointer of new tail to the head.
            d. Set head's next pointer to the new tail.
        3. If both head and tail already exists:
            a. Replace current tail with the new tail instance.
            b. Set the new tail's prev pointer to the previous tail.
            c. Set the previous tail's next pointer to the new tail.
        """
        if not self.tail:
            self.tail = ListNode(val, self.head, None)
        elif not self.head:
            self.head = self.tail
            self.tail = ListNode(val, self.head, None)
            self.head.next = self.tail
        else:
            self.tail = ListNode(val, self.tail, None)
            self.tail.prev.next = self.tail

    def remove_from_tail(self):
        """
        1. Check if there's no tail or head, return None if not.
            a. If there's a head but no tail, remove the head.
        2. If a tail exists:
            a. Keep a reference of the current tail.
            b. Replace the tail with its prev node.
            c. Then set the new tail's next pointer to None.
            d. Return the "deleted" tail's value.
        """
        if not self.tail:
            if not self.head:
                return None
            return self.remove_from_head()
        else:
            current_tail = self.tail
            self.tail = self.tail.prev
            self.tail.next = None
            return current_tail.val

    def move_to_front(self, node):
        """
        To move a node to the front, we can use methods we defined above.
        1. First check if that node is the tail.
            a. If it's the tail, remove it.
        2. If it's not the tail, we'll call the delete function on that node.
            a. This reassigns its neighbors' pointers.
        3. Then we call add_to_head and pass the node's value.
        """
        if node is self.tail:
            self.remove_from_tail()
        else:
            node.delete()
        self.add_to_head(node.val)

    def move_to_end(self, node):
        """
        To move a node to the end, we can use methods we defined above.
        1. First check if that node is the head.
            a. If it's the head, remove it.
        2. If it's not the head, we'll call the delete function on that node.
            a. This reassigns its neighbors' pointers.
        3. Then we call add_to_tail and pass the node's value.
        """
        if node is self.head:
            self.remove_from_head()
        else:
            node.delete()
        self.add_to_tail(node.val)


DLL = DoublyLinkedList()
DLL.add_to_head('E')
DLL.add_to_tail('A')
DLL.add_to_tail('C')
DLL.add_to_tail('D')
DLL.add_to_head('B')
DLL.move_to_front(DLL.head.next.next)
DLL.move_to_end(DLL.head.next.next)

print(DLL)
