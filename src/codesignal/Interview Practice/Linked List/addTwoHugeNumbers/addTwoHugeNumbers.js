// Source : https://app.codesignal.com/interview-practice/task/RvDFbsNC3Xn7pnQfH
// Author : Frank Faustino
// Date   : 2019-01-10

function addLeadingZeroes(number) {
  number = String(number)
  while (number.length < 4) {
    number = 0 + number
  }
  return number
}

function addTwoHugeNumbers(a, b) {
  let x = ''
  let y = ''

  while (a || b) {
    if (a) {
      x += addLeadingZeroes(a.value)
      a = a.next
    }
    if (b) {
      y += addLeadingZeroes(b.value)
      b = b.next
    }
  }
  y = y.split('').reverse().map(Number)
  x = x.split('').reverse().map(Number)
  const maxLength = Math.max(x.length, y.length)
  let carry = 0
  let output = []

  for (let i = 0; i < maxLength; i++) {
    if (isNaN(x[i])) x.push(0)
    if (isNaN(y[i])) y.push(0)

    const sum = x[i] + y[i]
    if (sum + carry > 9) {
      output.push((sum + carry) % 10)
      carry = 1
    } else {
      output.push(sum + carry)
      carry = 0
    }
  }

  output = output.reverse().reduce((acc, cur) => {
    let lastItem = acc[acc.length - 1]
    if (typeof lastItem === 'string' && lastItem.length < 4) {
      acc[acc.length - 1] = lastItem + cur
    } else {
      acc.push(`${cur}`)
    }
    return acc
  }, []).map(Number)

  if (carry) {
    output.unshift(1)
  }
  return output
}

module.exports = addTwoHugeNumbers
