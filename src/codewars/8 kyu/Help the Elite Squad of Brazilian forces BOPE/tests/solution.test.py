from os.path import abspath, dirname, join
import sys
import unittest

sys.path.insert(1, abspath(join(dirname(__file__), '..')))

from solution import mag_number


class UnitTests(unittest.TestCase):
    def test_solution(self):
        test_cases = (
            (("PT92", 6), 2),
            (("M4A1", 8), 1),
            (("M16A2", 19), 2),
            (("PSG1", 31), 19),
            (("PT92", 19), 4),
        )

        for test in test_cases:
            self.assertEqual(mag_number(test[0]), test[1])

if __name__ == '__main__':
    unittest.main()
