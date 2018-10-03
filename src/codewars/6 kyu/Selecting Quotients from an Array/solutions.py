# Title  : Selecting Quotients from an Array
# Author : Frank Faustino
# Date   : 2018-09-03
# Lang   : Python

# a) nested for loop
def sel_quot(arr, m, dir_str = None):
  set_list = set(arr)
  output = []

  for i in set_list:
    for j in set_list:
      q = j / i
      if j % i == 0 and q >= m:
        if dir_str and dir_str.lower() == 'odd' and q % 2 == 1:
          output.append((q, (j, i)))
        elif dir_str and dir_str.lower() == 'even' and q % 2 == 0:
          output.append((q, (j, i)))
        elif dir_str is None:
          output.append((q, (j, i)))

  return sorted(output)

# b) list comprehensions
def sel_quot(arr, m, dir_str = None):
  return sorted([(n / d, (n, d)) for n, d in ints(set(arr)) if predicate(m, dir_str)(n, d)])

def ints(arr):
  return [(n, d) for n in arr for d in arr if n % d == 0]

def predicate(m, dir_str):
  if dir_str is None:
    x = lambda _: True
  elif dir_str.lower() == 'odd':
    x = lambda n: n % 2 == 1
  else:
    x = lambda n: n % 2 == 0

  def f(n, d):
    q = n / d
    return q >= m and x(q)
  return f

# test cases
arr = [2, 4, 27, 16, 9, 15, 25, 6, 12, 83, 24, 49, 7, 5, 94, 12, 6]

print(sel_quot(arr, 6)) # [(6, (12, 2)), (6, (24, 4)), (7, (49, 7)), (8, (16, 2)), (12, (24, 2)), (47, (94, 2))])
print(sel_quot(arr, 6, "Odd")) # [(7, (49, 7)), (47, (94, 2))])
print(sel_quot(arr, 6, 'even')) # [(6, (12, 2)), (6, (24, 4)), (8, (16, 2)), (12, (24, 2))])
