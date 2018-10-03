// Source: https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem
// Author: Frank Faustino
// Date  : 2018-01-25
// Lang  : JavaScript

const processData = input => {
  const parsed = input.split('\n')
  const len = parsed.splice(0, 1)[0]
  const numbers = parsed.slice(0, len)
  const names = parsed.slice(len)

  const book = numbers.reduce((acc, cur) => {
    let [name, num] = cur.split(' ')
    acc[name] = num
    return acc
  }, {})

  names.forEach(name => {
    console.log(
      name in book
      ? `${name}=${book[name]}`
      : 'Not found'
    )
  })
}
