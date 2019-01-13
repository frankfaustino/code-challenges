// Source : https://app.codesignal.com/interview-practice/task/C8Jdyk3ybixqQdAvM
// Author : Frank Faustino
// Date   : 2019-01-12

// Knuth-Morris-Pratt algorithm (KMP)
function buildPatternTable(word) {
  const patternTable = [0]
  let prefix = 0
  let suffix = 1

  while (suffix < word.length) {
    if (word[prefix] === word[suffix]) {
      patternTable[suffix] = prefix + 1
      prefix++
      suffix++
    } else if (prefix === 0) {
      patternTable[suffix] = 0
      suffix++
    } else {
      prefix = patternTable[prefix - 1]
    }
  }

  return patternTable
}

function findFirstSubstringOccurrence(string, pattern) {
  let sIndex = 0
  let pIndex = 0

  const patternTable = buildPatternTable(pattern)

  while (sIndex < string.length) {
    if (string[sIndex] === pattern[pIndex]) {
      if (pIndex === pattern.length - 1) {
        return (sIndex - pattern.length) + 1
      }
      sIndex++
      pIndex++
    } else if (pIndex > 0) {
      pIndex = patternTable[pIndex - 1]
    } else {
      sIndex++
    }
  }

  return -1
}

module.exports = findFirstSubstringOccurrence