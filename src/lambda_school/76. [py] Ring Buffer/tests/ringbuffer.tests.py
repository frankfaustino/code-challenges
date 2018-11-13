from os.path import abspath, dirname, join
import sys
import unittest

sys.path.insert(1, abspath(join(dirname(__file__), '..')))

from solution import RingBuffer


class UnitTests(unittest.TestCase):
    def setUp(self):
        self.buffer = RingBuffer(5)

    def test_buffer_works(self):
        self.buffer.append('a')
        self.buffer.append('b')
        self.buffer.append('c')
        self.buffer.append('d')
        self.assertEqual(self.buffer.get(), ['a', 'b', 'c', 'd'])

        self.buffer.append('e')
        self.assertEqual(self.buffer.get(), ['a', 'b', 'c', 'd', 'e'])

        self.buffer.append('f')
        self.assertEqual(self.buffer.get(), ['f', 'b', 'c', 'd', 'e'])

        self.buffer.append('g')
        self.buffer.append('h')
        self.buffer.append('i')
        self.assertEqual(self.buffer.get(), ['f', 'g', 'h', 'i', 'e'])


if __name__ == '__main__':
    unittest.main()
