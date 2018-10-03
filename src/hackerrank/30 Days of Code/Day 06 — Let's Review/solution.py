# Source: https://www.hackerrank.com/challenges/30-review-loop/problem
# Author: Frank Faustino
# Date:   2018-01-21
# Lang:   Python 3

for i in range(int(input())):
    s = input()
    print(s[::2], s[1::2])

# s[::2]  every 2nd element starting from 0 to length -1
# s[1::2] every 2nd element starting from 1 to length -1