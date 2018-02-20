// Title  : Bracket Matcher
// Source : https://www.pramp.com/challenge/xJZA01AxdlfpM2vZ2Wwa
// Author : Frank Faustino
// Lang   : JavaScript

function bracketMatch(text) {
  // your code goes here
}

/* ——— Test cases ——— */
bracketMatch(")") // -> 1
bracketMatch("(") // -> 1
bracketMatch("(())") // -> 0
bracketMatch("(()") // -> 1
bracketMatch("())(") // -> 2
bracketMatch("))))") // -> 4
bracketMatch(")(") // -> 2
bracketMatch("()()()()()") // -> 0