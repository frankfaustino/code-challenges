const sumStrings = (a, b) => {
  const length = Math.max(a.length, b.length)
  const sums = []
  let carry = 0
  a = a.split('').map(Number).reverse()
  b = b.split('').map(Number).reverse()

  for (let i = 0; i < length; i++) {
    if (isNaN(a[i])) a.push(0)
    if (isNaN(b[i])) b.push(0)
    const sum = a[i] + b[i]
    if (sum + carry > 9) {
      sums.push((sum + carry) % 10)
      carry = 1
    } else {
      sums.push(sum + carry)
      carry = 0
    }
    if (i === length - 1 && carry === 1) {
      sums.push(carry)
    }
  }

  return sums.reverse().join('').replace(/^0+/, '')
}

module.exports = sumStrings