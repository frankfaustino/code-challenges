# Source : https://www.codewars.com/kata/56d8f14cba01a83cdb0002a2/train/python
# Author : Frank Faustino
# Date   : 2021-12-26
# Lang   : Python

def get_positions(n): return n % 3, n // 3 % 3, n // 9 % 3
# // integer division


print(get_positions(8))   # (2, 2, 0)
print(get_positions(54))  # (0, 0, 0)
print(get_positions(98))  # (2, 2, 1)
print(get_positions(3))   # (0, 1, 0)

# Step   P1   P2   P3
# --------------------
#  0     0    0    0
#  1     1    0    0
#  2     2    0    0
#  3     0    1    0
#  4     1    1    0
#  5     2    1    0
#  6     0    2    0
#  7     1    2    0
#  8     2    2    0
#  9     0    0    1
