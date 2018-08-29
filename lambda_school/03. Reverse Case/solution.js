// Title  : Reverse Case
// Author : Frank Faustino
// Date   : 2018-02-19
// Lang   : JavaScript

const reverseCase = str => str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
