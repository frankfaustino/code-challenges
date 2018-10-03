/* ———
 * Write a function balancedBrackets that accepts a string and returns true if the parentheses are balanced and false otherwise.
 * Make the solution work for all types of brackets {}, [], ()
 * Ignore other characters
 * ——— */

const balancedBrackets = str => {
  // Code here
}

balancedBrackets('(') // false
balancedBrackets('()') // true
balancedBrackets(')(') // false
balancedBrackets('(())') // true
balancedBrackets('[](){}') // true
balancedBrackets('[({})]') // true
balancedBrackets('[(]{)}') // false
balancedBrackets('const obj = { x: someFunction() }') // true
