// Title  : setTimeout inside a for loop
// Author : Frank Faustino
// Date   : 2018-02-25
// Lang   : JavaScript

// Solution a) Value of i is used as third parameter in setTimeout, which is passed as arg in the callback function
for (var i = 1; i <= 10; i++) {
  setTimeout((arg) => {
    console.log(arg)
  }, i * 1000, i)
}

// Solution b) setTimeout is wrapped in an IIFE, with the value of i passed in
for (var i = 1; i <= 10; i++) {
  ((arg) => {
    setTimeout(() => {
      console.log(arg)
    }, arg * 1000)
  })(i)
}

// Solution c) IIFE
for (let i = 1; i <= 10; i++) {
  setTimeout(((arg) => () => {
    console.log(arg)
  })(i), i * 1000)
}

// Solution d) setTimeout is enclosed in a function, value of i is passed to that function
const delay = (i) => {
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}

for (var i = 1; i <= 10; i++) {
  delay(i)
}

// Solution e) let instead of var
for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
