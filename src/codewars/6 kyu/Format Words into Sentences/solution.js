// Source : https://www.codewars.com/kata/format-words-into-a-sentence/javascript
// Author : Frank Faustino
// Date   : 2017-09-22

// const formatWords = words => {
//   if (!words) return ''
//   let filtered = words.filter(e => e !== '')
//   if (!filtered.length) return ''
//   return filtered.reduce((p, c, i, a) => p + (i + 1 !== a.length ? ', ' : ' and ') + c)
// }

// const formatWords = words => {
//   if (!words) return ''
//   return words.filter(e => e !== '').join(', ').replace(/(, )+(\S+)$/, ' and $2')
// }

// const formatWords = words => words ? words.filter(e => e.length).join(', ').replace(/,(?=[^,]*$)/, ' and') : ''

const formatWords = words => (words || []).filter(e => e).join(', ').replace(/,(?= [^,]*$)/,' and')

console.log(formatWords(['ninja', 'samurai', 'ronin']));
console.log(formatWords(['one', 'two', 'three', 'four'])) // should return 'one, two, three and four'
console.log(formatWords(['one'])) // should return 'one'
console.log(formatWords(['one', '', 'three'])) //should return 'one and three'
console.log(formatWords(['', '', 'three'])) // should return 'three'
console.log(formatWords(['one', 'two', ''])) // should return 'one and two'
console.log(formatWords([]))
console.log(formatWords())
console.log(formatWords(null))