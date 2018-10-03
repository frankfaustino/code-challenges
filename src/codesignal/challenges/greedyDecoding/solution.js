// Title  : shapeArea
// Author : Frank Faustino
// Date   : 2018-07-04
// Lang   : JavaScript

// a) reduce
const greedyDecoding = str => {
  let output = ''

  for (let i = 0; i < str.length; i++) {
    // concatenate the current and next numbers, then convert to Number type
    const tmp = Number(str[i] + str[i + 1])
    // if that number falls within the 26 possible encoded characters
    // add 64 to that number so it's UTF-16, then convert it to string
    // concatenate the result to output
    // increment i so we skip the next iteration
    if (tmp <= 26) {
      output += String.fromCharCode(tmp + 64)
      i++
      continue
    }
    // the case where it's a single digit number
    output += String.fromCharCode(Number(str[i]) + 64)
  }

  return output
}