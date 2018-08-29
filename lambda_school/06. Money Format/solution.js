// Title  : Money Format
// Author : Frank Faustino
// Date   : 2018-02-19
// Lang   : JavaScript

// a. toFixed() and RegExp
const moneyFormat = n => n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

// b. Model Solution
function moneyFormat(float) {
  let finalStr = ''
  let cents = Math.round((float % 1) / 0.01) || '00'

  if (0 < cents && cents < 10) cents = '0' + cents
  let dollars = Math.floor(float).toString()
  finalStr = `${dollars.slice(-3)}.${cents}`
  dollars = dollars.slice(0, -3)

  while (dollars.length > 3) {
    const nextThree = dollars.slice(-3)
    finalStr = `${nextThree} ${finalStr}`
    dollars = dollars.slice(0, -3)
  }

  finalStr = `${dollars} ${finalStr}`
  return finalStr
}

// Pseudocode
  // initialize a string to return
  // get the cents side and round it
  // if the cents side is between 0 and 10, we will put a zero in front of cents
  // round the left side using floor and convert it to a string
  // intialize our string to return as the last three digits of the left side and the cents
  // slice the last three digits off of the left side
  // do the same thing in a while loop
    // initialize the next three digits
    // add tthem onto the final string
    // slice off the last three digits
  // add the final numbers to the final string
  // return the final string