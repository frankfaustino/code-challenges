// Source : https://codewars.com/kata/shorten-me-mad-mathematicians-algorithm-iii-multiplication
// Author : Frank Faustino
// Date   : 2018-07-03
// Lang   : JavaScript

// dividing a by b's reciprocal is the same as multiplying a with b
// adding 0.5 then bitwise OR 0 rounds the number (converts float to 32-bit signed integer)
madMul=(a,b)=>a/(1/b)+.5|0

// same as above, except uses double bitwise NOT to truncate the decimals
madMul=(a,b)=>~~(a/(1/b)+.5)

// recursion
madMul=f=(a,b)=>a&&b+f(a-1,b)
