# Source : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
# Author : Frank Faustino
# Date   : 2018-09-28

# Time complexity: O(n)
# Space complexity: O(n)

def twoSum(numbers, target):
    """
    Since the input array is already sorted we don't have to
    check all combinations, so we can solve it in O(n)
    by keeping track of two indices (start and end).
    If sum of start/end indices is greater than the target,
    move the end pointer back one index.
    If sum of start/end indices is less than the target,
    move the start pointer forward one index.
    When the start and end pointers meet, the array doesn't
    contain two numbers that sum up to the target number.
    """
    length = len(numbers) - 1
    end = length
    start = 0

    while start != end and start <= length and end > 0:
        sum = numbers[start] + numbers[end]
        if sum > target: end -= 1
        elif sum < target: start += 1
        else: return [start + 1, end + 1]