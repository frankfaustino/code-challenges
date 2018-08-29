// Title  : Check Matching Leaves
// Author : Frank Faustino
// Date   : 2018-03-14
// Lang   : JavaScript

const checkMatchingLeaves = object => {
  let tmp
  let flag = true

  const checkLeaves = obj => {
    Object.entries(obj).forEach(([ key, value ]) => {
      if (typeof value === 'object') checkLeaves(value)
      else if (tmp === undefined) tmp = value
      else if (value !== tmp) flag = false
    })
  }

  checkLeaves(object)
  return flag
}