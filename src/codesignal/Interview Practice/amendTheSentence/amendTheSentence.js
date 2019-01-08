// Source : https://app.codesignal.com/interview-practice/task/yXDg4rAk9ooEjLjdj
// Author : Frank Faustino
// Date   : 2019-01-07

const amendTheSentence = s => s.split('').reduce((a, c) => c === c.toUpperCase()
  ? (a += ' ' + c.toLowerCase())
  : (a += c)
, '').trim()

module.exports = amendTheSentence