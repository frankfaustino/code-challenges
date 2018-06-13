# Source : https://www.codewars.com/kata/letterbox-paint-squad/train/python
# Author : Frank Faustino
# Date   : 2018-06-13
# Lang   : Python

# a
def paint_letterboxes(s, f):
  output = [0] * 10
  for i in range(s, f + 1):
    for digit in str(i):
      output[int(digit)] += 1
  return output

# b
def paint_letterboxes(s, f):
    painted = ''.join(map(str, range(s, f + 1)))
    return [painted.count(digit) for digit in '0123456789']
