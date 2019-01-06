// Source : https://www.codewars.com/kata/uribuilder/javascript
// Author : Frank Faustino
// Date   : 2019-01-05

const parser = str => {
  const output = []
  const params = {}
  if (str.includes('?')) {
    const [left, right] = str.split('?')
    right.split('&').forEach(param => (params[param[0]] = param[2]))
    output.push(left, params)
  } else {
    output.push(str, params)
  }
  return output
}

class UriBuilder {
  constructor(root) {
    const [url, params] = parser(root)
    this.url = url
    this.params = params
  }
  build() {
    let output = this.url
    const params = Object.entries(this.params)
    if (params.length) {
      output += `?${params
        .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
        .join('&')}`
    }
    return output
  }
}

module.exports = UriBuilder
