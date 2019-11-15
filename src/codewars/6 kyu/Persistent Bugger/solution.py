# Source : https://www.codewars.com/kata/persistent-bugger/python
# Author : Frank Faustino
# Date   : 2019-11-15

from functools import reduce

def persistence(num):
    counter = 0
    n = num
    
    def multiplier(x):
        list = []
        while (x % 10) != 0:
            list.append(x % 10)
            x = int(x / 10)
        
        if x == 0 and len(list):
            return reduce(lambda x, y: x * y, list)
        else:
            return 0
    
    while (n % 10) != n:
        n = multiplier(n)
        counter = counter + 1
    
    return counter