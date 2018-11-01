// Title  : Sock Merchant
// Author : Frank Faustino
// Date   : 2018-10-31
// Lang   : JavaScript

const sockMerchant = (n, ar) =>
  Object.values(
    ar.reduce((a, c) => {
      c in a ? a[c]++ : (a[c] = 1)
      return a
    }, {})
  ).reduce((a, c) => (a += Math.floor(c / 2)), 0)


console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // 3
