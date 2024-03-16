# Source : https://leetcode.com/problems/contiguous-array
# Author : Frank Faustino
# Date   : 2024-03-15
# Tags   : prefix-sum

from typing import List

# Time complexity  : O(n)
# Space complexity : O(n)
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        diff = 0
        max_len = 0
        map = {0: -1}

        for i, v in enumerate(nums):
            diff += 1 if v == 1 else -1
            if diff in map:
                max_len = max(max_len, i - map[diff])
            else:
                map[diff] = i

        return max_len

print(Solution().findMaxLength([0, 1])) # 2
print(Solution().findMaxLength([0, 1, 0])) # 2

