const fs = require('fs')

function* cycle(iterable) {
  const saved = []

  for (let element of iterable) {
    saved.push(element)
  }

  while (saved.length > 0) {
    for (let element of saved) {
      yield element
    }
  }
}

const printSum = arr => console.log(arr.reduce((a, c) => a + c, 0))

const printSecondFrequency = (changes) => {
  const seen = new Set()
  let frequency = 0

  for (let change of cycle(changes)) {
    console.log('adding 👉', frequency)
    seen.add(frequency)
    frequency += change
    if (seen.has(frequency)) {
      console.log('winner 🍗', frequency)
      process.exit()
    }
  }
}

fs.readFile('input', 'utf8', (e, d) => {
  const changes = d.split(/\n/).map(Number)

  printSum(changes)
  printSecondFrequency(changes)
})
