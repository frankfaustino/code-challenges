// Source : https://www.hackerrank.com/challenges/anagram/problem
// Author : Frank Faustino
// Date   : 2018-12-09

const anagram = (s) => {
  if (s.length % 2 !== 0) return -1

  const one = s.slice(0, s.length / 2)
  let two = s.slice(s.length / 2)
  let count = 0

  for (let i = 0; i < one.length; i++) {
    const index = two.indexOf(one[i])
    index > -1
      ? (two = two.slice(0, index) + two.slice(index + 1))
      : count++
  }

  return count
}

module.exports = anagram