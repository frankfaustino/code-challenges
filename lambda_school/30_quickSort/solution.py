# Title  : Quick Sort
# Author : Frank Faustino
# Date   : 2018-06-12
# Lang   : Python

def quickSort(array):
    if len(array) < 2: return array

    pivot = array.pop()
    left = []
    right = []

    for x in array:
        if x < pivot: left.append(x)
        else: right.append(x)

    return quickSort(left) + [pivot] + quickSort(right)