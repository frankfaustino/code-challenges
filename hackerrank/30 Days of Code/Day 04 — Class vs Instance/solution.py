# Source : https://www.hackerrank.com/challenges/30-class-vs-instance
# Author : Frank Faustino
# Date   : 2018-02-17
# Lang   : Python

class Person:
    def __init__(self,n):
        if (n < 0):
            self.age = 0
            print('Age is not valid, setting age to 0.')
        self.age = n
    def amIOld(self):
        if (self.age < 13): print('You are young.')
        elif (self.age >= 13 and self.age < 18): print('You are a teenager.')
        else: print('You are old.')
    def yearPasses(self):
        self.age = self.age + 1