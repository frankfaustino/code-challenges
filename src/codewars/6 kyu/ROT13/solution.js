// Source : https://www.codewars.com/kata/rot13-1
// Author : Frank Faustino
// Date   : 2019-02-09

const rot13 = message =>
  message.replace(/[a-z]/gi, char =>
    String.fromCharCode(
      char.charCodeAt(0) + (char.toLowerCase().charCodeAt(0) < 110 ? 13 : -13)
    )
  )

// const rot13 = message =>
//   message
//     .split('')
//     .map(char => {
//       const charCode = char.toLowerCase().charCodeAt(0)
//       let rotCode = char.charCodeAt(0)

//       if (charCode > 96 && charCode < 123) {
//         // 'a' 97 | 'z' 122
//         rotCode += (charCode < 110 ? 13 : -13)
//       }
//       return String.fromCharCode(rotCode)
//     })
//     .join('')

module.exports = rot13
