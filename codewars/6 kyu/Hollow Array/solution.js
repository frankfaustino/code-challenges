// Source : https://www.codewars.com/kata/hollow-array
// Author : Frank Faustino
// Date   : 2018-01-02

const isHollow = x => /^(1*)0{3}\1$/.test(x.map(x => x ? 1 : 0).join(''))

console.log(isHollow([-1,0,0,0,3]))      // true
console.log(isHollow([1,0,0,0,0]))       // false
console.log(isHollow([1,0,0,3,1]))       // false
console.log(isHollow([1,1,0,0,0,1,1,1])) // false