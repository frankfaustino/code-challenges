# Source : https://www.codewars.com/kata/disemvowel-trolls/python
# Author : Frank Faustino
# Date   : 2018-06-13
# Lang   : Python

# a) re module
import re
def disemvowel(s):
    return re.sub(r'(?i)[aeiou]', '', s)

# b) translate method using table constructed w/ maketrans()
def disemvowel(s):
    return s.translate(s.maketrans('','','aeiouAEIOU'))

# c) join method
def disemvowel(s):
    return ''.join(c for c in s if c.lower() not in 'aeiou')