# Source : [Py] Mean Median Mode
# Author : Frank Faustino
# Date   : 2018-08-21
# Lang   : Python

from functools import reduce

def mean(n):
  return reduce(lambda a, c: a + c, n) / len(n)

def median(n):
  sorted_arr = sorted(n)
  mid = len(n) // 2
  if len(n) % 2 is 0:
    return sorted_arr[mid] + sorted_arr[mid - 1] / 2
  else:
    return sorted_arr[mid]

def mode(n):
  d = {}
  for i in n:
    if i in d:
      d[i] += 1
    else:
      d[i] = 1

  freq = [0, None]
  for k, v in d.items():
    if freq[0] < v:
      freq[0] = v
      freq[1] = k
  return freq[1]

def meanMedianMode(numbers):
  return {
    'mean': mean(numbers),
    'median': median(numbers),
    'mode': mode(numbers)
  }
