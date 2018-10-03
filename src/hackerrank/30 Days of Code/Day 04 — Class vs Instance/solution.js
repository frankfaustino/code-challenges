// Source : https://www.hackerrank.com/challenges/30-class-vs-instance/
// Author : Frank Faustino
// Date   : 2018-02-17
// Lang   : JavaScript

// ES6 Syntax
class Person {
  constructor(initialAge) {
    if (initialAge < 0) {
      this.age = 0
      console.log('Age is not valid, setting age to 0.')
    }
    this.age = initialAge
  }
  amIOld() {
    if (this.age < 13) console.log('You are young.')
    else if (this.age >= 13 && this.age < 18) console.log('You are a teenager.')
    else console.log('You are old.')
  }
  yearPasses() {
    this.age++
  }
}

// ES5 Syntax
function Person(initialAge) {
  if (initialAge < 0) {
      this.age = 0
      console.log('Age is not valid, setting age to 0.')
  }
  this.age = initialAge
  this.amIOld = function() {
    if (this.age < 13) console.log('You are young.')
    else if (this.age >= 13 && this.age < 18) console.log('You are a teenager.')
    else console.log('You are old.')
  }
  this.yearPasses = function() {
    this.age++
  }
}