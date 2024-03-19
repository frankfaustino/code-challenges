# Source : https://leetcode.com/problems/task-scheduler
# Author : Frank Faustino
# Date   : 2024-03-18

from collections import Counter, deque
from typing import List
import heapq

# Time complexity  : O(n log m)
# Space complexity : O(n)
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = Counter(tasks)
        max_heap = [-cnt for cnt in count.values()]
        heapq.heapify(max_heap)

        time = 0
        queue = deque()

        while max_heap or queue:
            time += 1
            if max_heap:
                cnt = 1 + heapq.heappop(max_heap)
                if cnt:
                    queue.append([cnt, time + n])
            if queue and queue[0][1] == time:
                heapq.heappush(max_heap, queue.popleft()[0])

        return time

print(Solution().leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)) # 8
print(Solution().leastInterval(['A', 'C', 'A', 'B', 'D', 'B'], 1)) # 6
print(Solution().leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3)) # 10

