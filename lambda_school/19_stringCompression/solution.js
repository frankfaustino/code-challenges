// Title  : String Compression
// Author : Frank Faustino
// Date   : 2018-03-13
// Lang   : JavaScript

const stringCompression = str => {
  let output = ''
  let count = 1

  for (let i = 1; i <= str.length; i++) {
    if (str[i - 1] === str[i]) count++
    else if (str[i - 1] !== str[i]) {
      output += str[i - 1] + count
      count = 1
    }
  }

  return output.length < str.length ? output : str
}
