# Source : [Py] Lists
# Author : Frank Faustino
# Date   : 2018-08-13
# Lang   : Python

# 1. should print 3
def match_ends(words):
  return len([s for s in words if len(s) >= 2 and s[0] is s[-1]])

print(match_ends(['aba', 'xyz', 'aa', 'x', 'bbb']))


# 2. should print ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
def front_x(words):
  sorted_list = sorted(words)
  x = []
  z = []

  for s in sorted_list:
    if s[0] is 'x':
      x.append(s)
    else:
      z.append(s)

  return x + z

print(front_x(['mix', 'xyz', 'apple', 'xanadu', 'aardvark']))


# 3. should print [(2, 2), (1, 3), (3, 4, 5), (1, 7)]
def sort_last(tuples):
  return sorted(tuples, key=lambda t: t[-1])

print(sort_last([(1, 7), (1, 3), (3, 4, 5), (2, 2)]))