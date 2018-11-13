# Title  : Ring Buffer
# Author : Frank Faustino
# Date   : 2018-11-13
# Lang   : Python

class RingBuffer:
    def __init__(self, capacity):
        self.capacity = capacity
        self.pointer = 0
        self.storage = [None for _ in range(0, capacity)]

    def append(self, item):
        if self.pointer == self.capacity:
            self.pointer = 0
        self.storage[self.pointer] = item
        self.pointer += 1

    def get(self):
        return [item for item in self.storage if item is not None]
