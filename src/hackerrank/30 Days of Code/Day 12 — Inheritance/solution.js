// Source : https://www.hackerrank.com/challenges/30-inheritance/
// Author : Frank Faustino
// Date   : 2018-02-04
// Lang   : JavaScript

const getGrade = n => {
  if (n < 40) return 'T'
  else if (n < 55) return 'D'
  else if (n < 70) return 'P'
  else if (n < 80) return 'A'
  else if (n < 90) return 'E'
  else return 'O'
}

class Student extends Person {
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id)
    this.scores = scores
  }

  calculate() {
    return getGrade(this.scores.reduce((a, b) => a + b) / this.scores.length)
  }
}
