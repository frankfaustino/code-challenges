# Source : https://www.codewars.com/kata/sort-binary-tree-by-levels/python
# Author : Frank Faustino
# Date   : 2019-01-06


def tree_by_levels(node):
    if node is None: return []
    output = []
    queue = [node]

    while len(queue):
      current = queue.pop(0)
      output.append(current.value)
      if current.left:
        queue.append(current.left)
      if current.right:
        queue.append(current.right)

    return output
