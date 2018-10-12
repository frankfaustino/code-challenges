class Node:
  def __init__(self, value=None, next=None):
    self.value = value
    self.next = next

  def __iter__(self):
    node = self
    while node:
      yield node
      node = node.next

  def __repr__(self):
    return f'{self.value}'

# Time Complexity: O(n)
# Space Complexity: O(1)
def reverseList(node):
  prev = None
  next = None

  while node:
    next = node.next
    node.next = prev
    prev = node
    node = next

  return prev

# NodeA = Node('A')
# NodeB = Node('B')
# NodeC = Node('C')
# NodeD = Node('D')

# NodeA.next = NodeB
# NodeB.next = NodeC
# NodeC.next = NodeD

# reversed = reverseList(NodeA)
# print(' ➜ '.join([str(node) for node in reversed]))

# print(NodeD.next) # NodeC
# print(NodeC.next) # NodeB
# print(NodeB.next) # NodeA