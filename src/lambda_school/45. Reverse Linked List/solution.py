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
# Space Complexity: O(n)
# Can do better than this. What about in-place?
def reverseList(self):
  stack = []
  head = None
  prev = None

  for i in self:
    stack.append(i)

  while len(stack) > 0:
    node = stack.pop()
    if prev:
      prev.next = node
      if len(stack) is 0:
        node.next = None
        break
    else:
      head = node
    prev = node

  return head

NodeA = Node('A')
NodeB = Node('B')
NodeC = Node('C')
NodeD = Node('D')

NodeA.next = NodeB
NodeB.next = NodeC
NodeC.next = NodeD

reversed = reverseList(NodeA)
print(' ➜ '.join([str(node) for node in reversed]))

print(NodeD.next) # NodeC
print(NodeC.next) # NodeB
print(NodeB.next) # NodeA