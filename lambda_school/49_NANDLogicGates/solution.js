// Title  : NAND Logic Gates
// Author : Frank Faustino
// Date   : 2018-06-26
// Lang   : JavaScript

// if any input is 0, output is 1
// x 1, y 1 = 0
// x 1, y 0 = 1
// x 0, y 1 = 1
// x 0, y 0 = 1
function NAND(x, y) {
  return x && y ? 0 : 1
}

// inverts input value
function NOT(n) {
  return NAND(n, n)
}

// opposite of NAND
// if any input is 0, output is 0
// x 1, y 1 = 1
// x 1, y 0 = 0
// x 0, y 1 = 0
// x 0, y 0 = 0
function AND(x, y) {
  return NAND(NAND(x, y), NAND(x, y))
}

// if any input is 1, output is 1
// x 1, y 1 = 1
// x 1, y 0 = 1
// x 0, y 1 = 1
// x 0, y 0 = 0
function OR(x, y) {
  return NAND(NAND(x, x), NAND(y, y))
}

// x 1, y 1 = 0
// x 1, y 0 = 1
// x 0, y 1 = 1
// x 0, y 0 = 0
function XOR(x, y) {
  return NAND(NAND(x, NAND(x, y)), NAND(y, NAND(x, y)))
}
