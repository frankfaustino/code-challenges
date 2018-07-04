// Source : https://codewars.com/kata/shorten-me-mad-mathematicians-algorithm-ii-subtraction
// Author : Frank Faustino
// Date   : 2018-07-03
// Lang   : JavaScript

// bitwise NOT-ing any number x yields -(x + 1). e.g., ~8 yields -9
// 0000 1000 (8)
// 1111 0111 (-9 in 8-bit two's complement)
madSub=(a,b)=>a+~b+1