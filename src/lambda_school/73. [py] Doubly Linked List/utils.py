"""
Returns a string representation of either the ListNode / DoublyLinkedList
"""


def repr(self):
    len = sum(1 for _ in self)
    output = ''
    tab = '\t'
    for i, n in enumerate(self):
        output += tab[0] * i + 'prev: '
        if i == 0 and not n.prev:
            output += 'None'
        if n.prev:
            output += str(n.prev.val)
        output += '\n' + tab[0] * i + 'val : ' + str(n.val)
        output += '\n' + tab[0] * i + 'next: '
        if i == len - 1 and not n.next:
            output += 'None\n'
            continue
        if n.next:
            output += str(n.next.val) + ' ┐\n'
    return output
