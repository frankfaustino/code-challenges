// Source : https://www.codewars.com/kata/basic-compression/javascript
// Author : Frank Faustino
// Date   : 2017-11-04

const compress = str => {
  const c = JSON.stringify(str.match(/(.)\1*/g).map(c => [c.length, c[0]]))
  return c.length < str.length ? c : str
}

const decompress = c => {
  if (c[0] === '[') return JSON.parse(c).reduce((s, [n, c]) => s + c.repeat(n), '')
  else return c
}

console.log(compress('aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa'))
console.log(compress('aabcccccaaa'))
console.log(decompress([[26,'a'],[1,'b'],[18,'a']]))