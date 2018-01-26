// Source: https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem
// Author: Frank Faustino
// Date  : 2018-01-25
// Lang  : JavaScript

const processData = input => {
  const parsed = input.split('\n')
  const len = parsed.splice(0, 1)[0]
  const numbers = parsed.slice(0, len)
  const names = parsed.slice(len)
  let book = {}

  numbers.map(v => {
    let [name, num] = v.split(' ')
    book[name] = num
  })

  names.forEach(name => {
    !!book[name]
      ? console.log(`${name}=${book[name]}`)
      : console.log('Not found')
  })
}
