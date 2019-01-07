# Sort binary tree by levels

You are given a binary tree:
```py
class Node:
    def __init__(self, L, R, n):
        self.left = L
        self.right = R
        self.value = n
```

Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.

Return empty list if root is `None`.

#### Example 1 - following tree:
```
                 2
            8        9
          1  3     4   5
```
Should return following list:

`[2,8,9,1,3,4,5]`

#### Example 2 - following tree:
```
                 1
            8        4
              3        5
                         7
```
Should return following list:

`[1,8,4,3,5,7]`