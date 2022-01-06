// Source : https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript
// Author : Frank Faustino
// Date   : 2022-01-05
// Lang   : JavaScript

// function foldTo(distance) {
//     if (distance < 0) return null
//     let folds = 0
//     for (let thickness = 0.0001; thickness <= distance; thickness += thickness) {
//         folds++
//     }
//     return folds
// }

const foldTo = distance => {
    console.log(distance / 0.0001)
    console.log(Math.log2(0))
    return distance < 0 ? null : Math.ceil(Math.log2(distance / 0.0001))
}

// https://stackoverflow.com/questions/52570477/why-does-math-log0-return-infinity-in-javascript
// https://www.analyzemath.com/logfunction/logfunction.html
foldTo(0) // 0
// expect(solution(1e-7)).toEqual(0)
// expect(solution(3.643798254002032e-8)).toEqual(0)
// expect(solution(2.0679440878616568e-7)).toEqual(0)
// expect(solution(8.321947341010613e-10)).toEqual(0)
// expect(solution(1.62108175327396e-8)).toEqual(0)
// expect(solution(0.00001587084582603134)).toEqual(0)
// expect(solution(1.22291612017029e-7)).toEqual(0)
module.exports = foldTo
