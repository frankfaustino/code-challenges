// Source : https://www.codewars.com/kata/reducing-by-rules-to-get-the-result
// Author : Frank Faustino
// Date   : 2017-09-3

// Your task is to reduce a list of numbers to one number.
// For this you get a list of rules, how you have to reduce the numbers.
// You have to use these rules consecutively. So when you get to the end of the list of rules, you start again at the beginning.

const reduceByRules = (nums, rules) =>
  nums.reduce((a, b, i) => rules[(i - 1) % rules.length](a, b))

// const rule1 = [(a, b) => a + b, (a, b) => a - b]
// console.log(reduceByRules([2.0, 2.0, 3.0, 4.0], rule1)) // 5

// const rule2 = [(a, b) => a + b]
// console.log(reduceByRules([2.0, 2.0, 2.0], rule2)) // 6.0
// console.log(reduceByRules([2.0, 2.0, 2.0, 2.0], rule2)) // 8.0

// const rule3 = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b]
// console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rule3)) // 6.0
// console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rule3)) // 4.0

// const rule4 = [(a, b) => Math.min(a, b), (a, b) => Math.max(a, b)]
// console.log(reduceByRules([8.0, 8.1, 4.1, 12.0, 2.0], rule4)) // 8.0
// console.log(reduceByRules([2.9, 2.8, 2.7, 2.6, 2.5, 2.4], rule4)) // 2.4
