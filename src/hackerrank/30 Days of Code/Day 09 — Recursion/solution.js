// Source : https://www.hackerrank.com/challenges/30-recursion/problem
// Author : Frank Faustino
// Date   : 2018-01-26
// Lang   : JavaScript

const factorial = n => n <= 1 ? 1 : n * factorial(n - 1)