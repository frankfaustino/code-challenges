from os.path import abspath, dirname, join
import sys
import unittest

sys.path.insert(1, abspath(join(dirname(__file__), '..')))

from tree_by_levels import tree_by_levels


class Node:
    def __init__(self, L, R, n):
        self.left = L
        self.right = R
        self.value = n

class UnitTests(unittest.TestCase):
    def setUp(self):
        self.tree = Node(Node(None, Node(None, None, 4), 2), Node(Node(None, None, 5), Node(None, None, 6), 3), 1)

    def test_tree_by_levels(self):
        self.assertEqual(tree_by_levels(None), [])
        self.assertEqual(tree_by_levels(self.tree), [1, 2, 3, 4, 5, 6])

if __name__ == '__main__':
    unittest.main()
