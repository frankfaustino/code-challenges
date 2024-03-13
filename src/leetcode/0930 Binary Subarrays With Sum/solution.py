# Source : https://leetcode.com/problems/binary-subarrays-with-sum
# Author : Frank Faustino
# Date   : 2024-03-13
# Tags   : sliding-window, prefix-sum
from typing import List

# Time complexity  : O(n)
# Space complexity : O(1)
class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        l1 = l2 = sum1 = sum2 = i = count = 0

        while i < len(nums):
            sum1 += nums[i]
            sum2 += nums[i]

            while l1 <= i and sum1 > goal:
                sum1 -= nums[l1]
                l1 += 1
            while l2 <= i and sum2 >= goal:
                sum2 -= nums[l2]
                l2 += 1

            count += l2 - l1
            i += 1

        return count

print(Solution().numSubarraysWithSum([1,0,1,0,1], 2)) # 4
print(Solution().numSubarraysWithSum([0,0,0,0,0], 0)) # 15

