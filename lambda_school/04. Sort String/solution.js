// Title  : Sort String
// Author : Frank Faustino
// Date   : 2018-02-19
// Lang   : JavaScript

// a. split sort join
const sortStr = str => str.split('').sort().join('')

// b. no built-in methods
const stringToArray = str => {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i]
  }
  return arr
}

const arrToStr = str => {
  let joined = ''
  for (let i = 0; i < str.length; i++) {
    joined += str[i]
  }
  return joined
}

const sortString = str => {
  let arr = stringToArray(str)
  let len = arr.length

  while (len) {
    let tmp = 0
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        let save = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = save
        tmp = i
      }
    }
    len = tmp
  }
  return arrToStr(arr)
}
