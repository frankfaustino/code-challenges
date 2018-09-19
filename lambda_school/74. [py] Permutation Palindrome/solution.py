# Title  : Permutation Palindrome
# Author : Frank Faustino
# Date   : 2018-09-18
# Lang   : Python

"""
To determine whether any permutation of a given string is a palindrome,
we have to consider the properties of a palindrome.

There are two kinds of palindrome:
Even-length palindromes, whose first-half characters are the same as the latter half.
Odd-length palindromes, similar to even-length palindromes, except there's a central character.

With this in mind, we can deduce that a palindrome can only ever have 1 or 0 odd number of characters.

aabbcce — can be a palindrome (abcecba)
aaaaabc — cannot be a palidrome (3 odd numbered characters)
aaaabb  — can be a palindrome (aabbaa)
"""

def is_permutation_palindrome(string):
  """
  count variable keeps track of how many odd numbered characters
  d variable is our hash map of characters in the string with their frequency
  """
  count = 0
  d = {}

  """
  iterate through our string and increment the frequency count in d
  """
  for c in string:
    if c in d:
      d[c] += 1
    else:
      d[c] = 1

  """
  iterate through d's values and count how many odd numbered characters there are
  """
  for n in d.values():
    if n % 2 == 1:
      count += 1

  """
  if we have 1 or 0 odd numbered characters, we have a permutation of a palindrome
  """
  return count <= 1

# Using a set to keep track of odd numbered characters
def is_permutation_palindrome(string):
  unpaired_characters = set()
  for char in string:
    if char in unpaired_characters:
      unpaired_characters.remove(char)
    else:
      unpaired_characters.add(char)
  return len(unpaired_characters) <= 1

# More succinct version of the first solution
from collections import Counter
def is_permutation_palindrome(string):
  return sum(v % 2 for v in Counter(string).values()) <= 1