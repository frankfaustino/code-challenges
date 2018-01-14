// Source : https://www.pramp.com/challenge/W5EJq2Jld3t2ny9jyZXG
// Author : Frank Faustino
// Date   : 2018-01-13

const doc1 = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
const doc2 = "I have failed over and over and over again in my life and that is why I succeed."
const doc3 = "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. "
const doc4 = "To be, or not to be, that is the question:"
const doc5 = "Look If you had One shot, Or one opportunity, To seize everything you ever wanted, In one moment, Would you capture it, Or just let it slip?"
const doc6 = "Cause I'm Slim Shady, yes I'm the real Shady, All you other Slim Shadys are just imitating So won't the real Slim Shady, please stand up, Please stand up, Please stand up"

const wordCountEngine = str => {
  // Parse string for any punctuation and extra spaces
  // then split into an array
  const wordsArr = str
    .toLowerCase()
    .replace(/[':;,!?.]/g, '')
    .replace(/\s\s+/g, ' ')
    .trim()
    .split(' ')
  const obj = {}
  let output = []
  // Store words and their corresponding occurrences in an object
  for (let word of wordsArr) {
    if (word in obj) obj[word]++
    else obj[word] = 1
  }
  // Sorting will count down from the length of wordsArr
  // (which is the maximum possible occurrence of a word)
  // If the stored occurrence value matches `i` push the word
  // and occurrence number to our output array
  for (let i = wordsArr.length; i > -1; i--) {
    for (let key in obj) {
      if (obj[key] === i) output.push([key, `${i}`])
    }
  }
  return output
}

console.log(wordCountEngine(doc1))
console.log(wordCountEngine(doc2))
console.log(wordCountEngine(doc3))
console.log(wordCountEngine(doc4))
console.log(wordCountEngine(doc5))
console.log(wordCountEngine(doc6))
