# Title  : Find Rotation Point in Array
# Author : Frank Faustino
# Date   : 2018-09-02
# Lang   : Python

# recursive
# runtime complexity: O(log n)
def find_rotation_point(words):
  def recurse(low, high):
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
# runtime complexity: O(log n)
def find_rotation_point_itr(words):
  low = 0
  high = len(words) - 1
  mid = high // 2

  while True:
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

arr1 = [1, 2, 3, 4, 5]
arr2 = [8, 1, 2, 3, 4, 5, 6, 7]
arr3 = [5, 6, 1, 2, 3, 4]
arr4 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3]
arr5 = [2, 3, 1]
arr6 = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage'
]

print(find_rotation_point(arr1)) # 0
print(find_rotation_point(arr2)) # 1
print(find_rotation_point(arr3)) # 2
print(find_rotation_point(arr4)) # 17
print(find_rotation_point(arr5)) # 2
print(find_rotation_point(arr6)) # 5
