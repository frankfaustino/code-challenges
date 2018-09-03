from timeit import Timer
import random

r_counter = 0
i_counter = 0
l_counter = 0

# recursive
def find_rotation_point_r(words):
  def recurse(low, high):
    global r_counter
    r_counter += 1
    # print(f'{r_counter} ❌')
    mid = (high + low) // 2
    if words[mid] > words[mid + 1]:
      return mid + 1
    if words[mid] < words[mid - 1]:
      return mid
    if words[mid] < words[high]:
      return recurse(low, mid - 1)

    return recurse(mid + 1, high)

  return recurse(0, len(words) - 1)

# iterative
def find_rotation_point_i(words):
  global i_counter
  low = 0
  high = len(words) - 1
  mid = high // 2

  while True:
    i_counter += 1
    # print(f'{i_counter} 🖤')
    if words[mid] > words[mid + 1]:
      return mid + 1
    if words[mid] < words[mid - 1]:
      return mid
    if words[mid] < words[high]:
      high = mid - 1
      mid = high // 2
      continue
    low = mid + 1
    mid = (high + low) // 2

# LisaCee's solution
def find_rotation_point_l(words):
  global l_counter
  for i, v in enumerate(words):
    l_counter += 1
    # print(f'{l_counter} 😊')
    if v < words[0] :
      return i
  return 0

# create an array containing 0 through len of 100000
# generate random rotation index
# rotate the array at index
tmp = [i for i in range(10000)]
index = random.randrange(len(tmp))
arr = tmp[index:] + tmp[:index]

# repeat each function call 10000 times and time it
r = Timer(lambda: find_rotation_point_r(arr))
print(f'O(log n) recursive  time: {r.timeit(number=10000)}')
print(f'O(log n) recursive steps: {r_counter} \n')
i = Timer(lambda: find_rotation_point_i(arr))
print(f'O(log n) iterative  time: {i.timeit(number=10000)}')
print(f'O(log n) iterative steps: {i_counter} \n')
l = Timer(lambda: find_rotation_point_l(arr))
print(f'O(n)     iterative  time: {l.timeit(number=10000)}')
print(f'O(n)     iterative steps: {l_counter}')
