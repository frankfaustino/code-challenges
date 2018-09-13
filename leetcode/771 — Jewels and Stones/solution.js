// Source : https://leetcode.com/problems/jewels-and-stones
// Author : Frank Faustino
// Date   : 2018-09-13

// Time complexity: O(n)
// Space complexity: O(n)

const numJewelsInStones = function(J, S) {
  const dict = {}
  let counter = 0
  
  for (let i = 0; i < J.length; i++) {
      dict[J[i]] = true
  }

  for (let j = 0; j < S.length; j++) {
      if (dict[S[j]]) counter++
  }

  return counter
}