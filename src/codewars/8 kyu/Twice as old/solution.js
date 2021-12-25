// Source : https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
// Author : Frank Faustino
// Date   : 2021-12-24
// Lang   : JavaScript

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     const twiceSonsAge = sonYearsOld * 2
//     if (dadYearsOld < twiceSonsAge) {
//         return twiceSonsAge - dadYearsOld
//     }
//     return dadYearsOld - twiceSonsAge
// }

const twiceAsOld = (d, s) => Math.abs(d - (s * 2))

console.log(twiceAsOld(60, 20)) // 20 years
console.log(twiceAsOld(34, 20)) // 6 years
console.log(twiceAsOld(40, 20)) // 0 years