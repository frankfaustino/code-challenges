// Source : https://www.codewars.com/kata/salesmans-travel
// Author : Frank Faustino
// Date   : 2019-02-09

function travel(r, zipcode) {
  const regex = /(\d+) (\w*\s*.*) (\w\w\s\d{5})/
  const addresses = []
  const numbers = []

  r.split(',').forEach(address => {
    const [str, num, addr, zip] = regex.exec(address)
    if (zipcode === zip) {
      addresses.push(addr)
      numbers.push(num)
    }
  })

  return `${zipcode}:${addresses.join(',')}/${numbers.join(',')}`
}

module.exports = travel