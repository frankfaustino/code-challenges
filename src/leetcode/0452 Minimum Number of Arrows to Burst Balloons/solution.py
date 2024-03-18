# Source : https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons
# Author : Frank Faustino
# Date   : 2024-03-17

from typing import List

# Time complexity  : O(n log n)
# Space complexity : O(1)
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        sorted_points = points.sort()
        arrows = len(points)
        prev = points[0]

        for i in range(1, len(points)):
            curr = points[i]
            if curr[0] <= prev[1]:
                arrows -= 1
                prev = [curr[0], min(curr[1], prev[1])]
            else:
                prev = curr

        return arrows

print(Solution().findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])) # 2
print(Solution().findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]])) # 4
print(Solution().findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]])) # 2
