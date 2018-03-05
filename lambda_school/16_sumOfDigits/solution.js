// Source : Sum of Digits
// Author : Frank Faustino
// Date   : 2018-03-05
// Lang   : JavaScript

const sumOfDigits = n => n.toString().split('').reduce((a, c) => +a + +c)