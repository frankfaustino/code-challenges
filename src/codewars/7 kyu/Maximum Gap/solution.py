# Source : https://www.codewars.com/kata/5a7893ef0025e9eb50000013
# Author : Frank Faustino
# Date   : 2024-02-07

# Time complexity  : O(n log n)
# Space complexity : O(1)
def max_gap(numbers):
    numbers = sorted(numbers)
    gap = 0
    for i in range(1, len(numbers)):
        diff = abs(numbers[i] - numbers[i-1])
        if diff > gap: gap = diff
    return gap

print(max_gap([13,10,2,9,5]), 4)
print(max_gap([13,3,5]), 8)
print(max_gap([24,299,131,14,26,25]), 168)
print(max_gap([-3,-27,-4,-2]), 23)
print(max_gap([-7,-42,-809,-14,-12]), 767)
print(max_gap([12,-5,-7,0,290]), 278)
print(max_gap([-54,37,0,64,-15,640,0]), 576)
print(max_gap([130,30,50]), 80)
print(max_gap([1,1,1]), 0)
print(max_gap([-1,-1,-1]), 0)

