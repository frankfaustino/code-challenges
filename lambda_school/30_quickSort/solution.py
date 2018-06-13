# Title  : Quick Sort
# Author : Frank Faustino
# Date   : 2018-06-12
# Lang   : Python

def quickSort(array):
    left = []
    equal = []
    right = []

    if len(array) < 2:
        return array

    pivot = array[0]
    for x in array:
        if x < pivot:
            left.append(x)
        elif x == pivot:
            equal.append(x)
        else:
            right.append(x)

    return quickSort(left) + equal + quickSort(right)