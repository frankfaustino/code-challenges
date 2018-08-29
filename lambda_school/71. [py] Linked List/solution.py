# Title  : Linked List
# Author : Frank Faustino
# Date   : 2018-08-28
# Lang   : Python

class Node:
  def __init__(self, data = None, next_node = None):
    self.data = data
    self.next_node = next_node

  def get_data(self):
    return self.data

  # 😇
  # def get_next(self):
  #   return self.next_node

  # def set_next(self, new_next):
  #   self.next_node = new_next


class LinkedList:
  def __init__(self, head = None):
    self.head = head

  def __iter__(self):
    node = self.head
    while node:
      yield node
      node = node.next_node
    
  def __repr__(self):
    return ' ➜ '.join(map(str, [node.data for node in self]))

  def insert(self, item):
    new_node = Node(item)
    if not self.head:
      self.head = new_node
    else:
      current = self.head
      while current.next_node:
        current = current.next_node
      current.next_node = new_node

  def size(self):
    count = 0
    for _ in self:
      count += 1
    return count

  def search(self, target):
    for node in self:
      if node.data is target:
        return node
    return None

  def delete(self, target):
    current = self.head
    if current.data is target:
      self.head = current.next_node
      return
    else:
      while current.next_node:
        if current.next_node.data is target:
          current.next_node = current.next_node.next_node
          return
        current = current.next_node
    raise ValueError(f'{target} Not found')


ll = LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
print(ll) # 1 ➜ 2 ➜ 3 ➜ 4
ll.delete(3)
print(ll) # 1 ➜ 2 ➜ 4
print(ll.size()) # 3
