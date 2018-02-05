// Source : https://www.hackerrank.com/challenges/30-abstract-classes/
// Author : Frank Faustino
// Date   : 2018-02-04
// Lang   : JavaScript

class MyBook extends Book {
  constructor(title, author, price) {
    super(title, author)
    this.price = price
  
  }

  display() {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}`)
  }
}
