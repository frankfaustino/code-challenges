# Source : https://www.codewars.com/kata/mexican-wave/train/python
# Author : Frank Faustino
# Date   : 2019-11-01


def wave(s):
    return [s[0:i]+s[i].swapcase()+s[i+1:] for i in range(len(s)) if s[i].isalpha()]
