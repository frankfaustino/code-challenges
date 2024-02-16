// Source : https://www.codewars.com/kata/52e1476c8147a7547a000811
// Author : Frank Faustino
// Date   : 2024-02-15
// Tags   : regex

const REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/

// ^ asserts the start of the string.
// (?=.*[a-z]) is a positive lookahead for at least one lowercase letter.
// (?=.*[A-Z]) is a positive lookahead for at least one uppercase letter.
// (?=.*\d) is a positive lookahead for at least one digit.
// [A-Za-z\d]{6,} ensures that the string consists of at least six characters that are either letters (both lowercase and uppercase) or digits. This part of the pattern also implicitly enforces that no non-alphanumeric characters are present.
// $ asserts the end of the string.

module.exports = REGEX

