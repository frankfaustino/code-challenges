# Source : https://leetcode.com/problems/two-sum/
# Author : Frank Faustino
# Date   : 2018-09-28

# Time complexity: O(n)
# Space complexity: O(n)

def twoSum(numbers, target):
    """
    To solve in O(n), we can keep track of numbers we've seen
    so far and its index in a dictionary.
    As we iterate through the array, we find the difference
    between the target and current number.
    If the difference matchs a number we've seen previously,
    we can return its index along with the current number's index.
    """
    dict = {}
    length = len(numbers) - 1
    i = 0

    while i <= length:
        diff = target - numbers[i]
        if diff in dict:
            return [dict[diff], i]
        dict[numbers[i]] = i
        i += 1