# Find Rotation Point in Array

Let's say we're given an alphabetically-sorted list of words that has been rotated at a single point. It might look something like this:

```py
words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', # ← rotation point
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
]
```

Write a function that, given a list of words such as this, returns the index of the rotation point. You can assume that no words will be duplicated.

```py
print(find_rotation_point(words))  # returns 5
```

#### Note:
Can you do this with O(log n) runtime complexity?