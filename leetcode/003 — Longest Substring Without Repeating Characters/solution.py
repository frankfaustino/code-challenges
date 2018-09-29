# Source : https://leetcode.com/problems/longest-substring-without-repeating-characters
# Author : Frank Faustino
# Date   : 2018-09-28

class Solution:
    def lengthOfLongestSubstring(self, s):
        if not s: return 0
        substrings = set()
        substr = ''
        length = len(s)

        for i in range(length):
            if s[i] in substr:
                substrings.add(substr)
                substr = substr[substr.index(s[i]) + 1:]
            substr += s[i]
            if i == length - 1:
              substrings.add(substr)
        return len(sorted(substrings, key=lambda x: len(x))[-1])

# Test cases:
one = 'abcabcbb' # 3 'abc'
two = 'bbbbb'    # 1 'b'
three = 'pwwkew' # 3 'wke'
four = ''        # 0
five = ' '       # 1 ' '
six = 'c'        # 1 'c'
seven = 'au'     # 2 'au'
eight = 'aab'    # 2 'ab'
nine = 'dvdf'    # 3 'vdf'
ten = 'anviaj'   # 5 'nviaj'

print(Solution().lengthOfLongestSubstring(one))
print(Solution().lengthOfLongestSubstring(two))
print(Solution().lengthOfLongestSubstring(three))
print(Solution().lengthOfLongestSubstring(four))
print(Solution().lengthOfLongestSubstring(five))
print(Solution().lengthOfLongestSubstring(six))
print(Solution().lengthOfLongestSubstring(seven))
print(Solution().lengthOfLongestSubstring(eight))
print(Solution().lengthOfLongestSubstring(nine))
print(Solution().lengthOfLongestSubstring(ten))
