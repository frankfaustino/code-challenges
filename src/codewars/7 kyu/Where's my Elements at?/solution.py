# Source : Where's my Elements at?
# Author : Frank Faustino
# Date   : 2022-01-27

def element_location(begin: int, end: int, index: int, size: int) -> int:
    i=begin + (index * size)
    if i < begin or i >= end:
        raise IndexError("index past end")
    return i