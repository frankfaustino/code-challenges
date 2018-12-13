// Source : https://leetcode.com/problems/decode-string
// Author : Frank Faustino
// Date   : 2018-12-13

// const decodeString = function(s) {
//   const regex = /(\d+)?\[(\w*)\]/g

//   while (regex.test(s)) {
//     s = s.replace(regex, (all, num, letters) => {
//       return num ? letters.repeat(num) : letters
//     })
//   }

//   return s
// }

const decodeString = function(s) {
  let stack = []
  let curNum = 0
  let curString = ''

  for (let c of s) {
    if (c === '[') {
      stack.push(curString)
      stack.push(curNum)
      curNum = 0
      curString = ''
    } else if (c === ']') {
      let num = stack.pop()
      let prevString = stack.pop()
      curString = prevString + curString.repeat(num)
    } else if (parseInt(c) || c === '0') {
      curNum = curNum * 10 + parseInt(c)
    } else {
      curString += c
    }
  }
  return curString
}

console.log(decodeString('3[a]2[b4[F]c]')) // aaabFFFFcbFFFFc
console.log(decodeString('100[leetcode]'))
console.log(decodeString('2[abc]3[cd]ef')) // abcabccdcdcdef
console.log(decodeString('3[a2[c]]')) // accaccacc
console.log(decodeString('3[a]2[bc]')) // aaabcbc
