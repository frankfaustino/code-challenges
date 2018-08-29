// Title  : Telephone Words
// Author : Frank Faustino
// Date   : 2018-06-07
// Lang   : JavaScript

const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
}

// a) Recursive solution
function telephoneWords(str) {
  const output = []

  function recursive_word_generator(word, index) {
    if (word.length === str.length) return output.push(word)

    const letters = phoneDigitsToLetters[str[index]]

    for (let i = 0; i < letters.length; i++) {
      recursive_word_generator(word + letters[i], index + 1)
    }
  }

  recursive_word_generator('', 0)
  return output
}

telephoneWords('45')

// b) Nested for loops
function telephoneWords(str) {
  const digits = str.split('').map(Number)
  let next
  let output = ['']

  for (let digit of digits) {
    next = []
    for (let letter of output)
      for (let char of phoneDigitsToLetters[digit])
        next.push(letter + char)

    output = next
  }
  
  return output
}
