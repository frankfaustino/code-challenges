// Source : https://www.codewars.com/kata/return-pyramids/javascript
// Author : Frank Faustino
// Date   : 2017-12-26

const pyramid = n => Array.from({length: n}, (_,i)=>`${' '.repeat(n-i-1)}/${i === n-1 ? '_'.repeat(i * 2) : ' '.repeat(i * 2)}\\`).join('\n') + '\n';

console.log(pyramid(20))

//      /\1
//     /  \2
//    /    \3
//   /      \4
//  /        \5
// /__________\6
// 123456789012
