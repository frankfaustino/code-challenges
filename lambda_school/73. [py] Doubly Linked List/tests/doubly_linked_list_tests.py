from os.path import abspath, dirname, join
import sys
import unittest

sys.path.insert(1, abspath(join(dirname(__file__), '..')))

from doubly_linked_list import DoublyLinkedList
from list_node import ListNode


class UnitTests(unittest.TestCase):
    def setUp(self):
        self.node = ListNode(1)
        self.dll = DoublyLinkedList(self.node)

    def test_list_remove_from_tail(self):
        # Failure message:
        # Your `List.remove_from_tail` method did not work as expected
        self.dll.add_to_tail(33)
        self.assertEqual(self.dll.remove_from_tail(), 33)

        self.dll.add_to_tail(68)
        self.assertEqual(self.dll.remove_from_tail(), 68)

    def test_list_remove_from_head(self):
        # Failure message:
        # Your `List.remove_from_head` method did not work as expected
        self.dll.add_to_head(2)
        self.assertEqual(self.dll.remove_from_head(), 2)

        self.dll.add_to_head(55)
        self.assertEqual(self.dll.remove_from_head(), 55)

    def test_list_move_to_front(self):
        # Failure message:
        # Your `List.move_to_front` method did not work as expected
        self.dll.add_to_tail(3)

        self.assertEqual(self.dll.head.val, 1)
        self.assertEqual(self.dll.tail.val, 3)

        self.dll.move_to_front(self.dll.tail)

        self.assertEqual(self.dll.head.val, 3)
        self.assertEqual(self.dll.head.next.val, 1)

    def test_list_move_to_end(self):
        # Failure message:
        # Your `List.move_to_end` method did not work as expected
        self.dll.add_to_head(40)

        self.assertEqual(self.dll.tail.val, 1)
        self.assertEqual(self.dll.head.val, 40)

        self.dll.move_to_end(self.dll.head)

        self.assertEqual(self.dll.tail.val, 40)
        self.assertEqual(self.dll.tail.prev.val, 1)

    def test_node_insert_after(self):
        # Failure message:
        # Your `Node.insert_after` method did not work as expected
        self.node.insert_after(2)
        self.assertEqual(self.node.next.val, 2)

    def test_list_add_to_head(self):
        # Failure message:
        # Your `List.add_to_head` method did not work as expected
        self.assertEqual(self.dll.head.val, 1)

        self.dll.add_to_head(10)
        self.assertEqual(self.dll.head.val, 10)
        self.assertEqual(self.dll.head.next.val, 1)

    def test_node_insert_before(self):
        # Failure message:
        # Your `Node.insert_before` method did not work as expected
        self.node.insert_before(0)
        self.assertEqual(self.node.prev.val, 0)

    def test_node_delete(self):
        # Failure message:
        # Your `Node.delete` method did not work as expected
        node_1 = ListNode(3)
        node_2 = ListNode(4)
        node_3 = ListNode(5)

        node_1.next = node_2
        node_2.next = node_3
        node_2.prev = node_1
        node_3.prev = node_2

        node_2.delete()

        self.assertEqual(node_1.next, node_3)
        self.assertEqual(node_3.prev, node_1)

    def test_list_add_to_tail(self):
        # Failure message:
        # Your `List.add_to_tail` method did not work as expected
        self.dll.add_to_tail(30)

        self.assertEqual(self.dll.tail.val, 30)

        self.dll.add_to_tail(20)
        self.assertEqual(self.dll.tail.val, 20)


if __name__ == '__main__':
    unittest.main()
