# Source : https://leetcode.com/problems/insert-interval/
# Author : Frank Faustino
# Date   : 2024-03-16

from typing import List

# Time complexity  : O(n)
# Space complexity : O(n)
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        output = []
        i = 0

        while i < len(intervals):
            if newInterval[1] < intervals[i][0]:
                output.append(newInterval)
                return output + intervals[i:]
            elif newInterval[0] > intervals[i][1]:
                output.append(intervals[i])
            else:
                newInterval = [min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]
            i+=1

        output.append(newInterval)
        return output

print(Solution().insert([[1,3],[6,9]], [2,5])) # [[1,5],[6,9]]
print(Solution().insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])) # [[1,2],[3,10],[12,16]]
print(Solution().insert([[1,5]], [2,3])) # [[1,5]]
print(Solution().insert([[1,5]], [2,7])) # [[1,7]]

