# Source : https://leetcode.com/problems/product-of-array-except-self
# Author : Frank Faustino
# Date   : 2024-03-14
# Tags   : prefix-sum
from typing import List

# Time complexity  : O(n)
# Space complexity : O(1)
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)
        output = [1] * length
      
        left = 1
        for i in range(length):
            output[i] = left
            left *= nums[i]
      
        right = 1
        for i in range(length - 1, -1, -1):
            output[i] *= right
            right *= nums[i]
      
        return output

print(Solution().productExceptSelf([1,2,3,4])) # [24,12,8,6]
print(Solution().productExceptSelf([-1,1,0,-3,3])) # [0,0,9,0,0]

