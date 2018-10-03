# Source : https://www.hackerrank.com/challenges/30-scope
# Author : Frank Faustino
# Date   : 2018-02-17
# Lang   : Python

class Difference:
    def __init__(self, a):
        self.__elements = a
# ——— Solution ——— #
        self.maximumDifference = 0
    def computeDifference(self):
        self.__elements.sort()
        self.maximumDifference = abs(self.__elements[0] - self.__elements[-1])