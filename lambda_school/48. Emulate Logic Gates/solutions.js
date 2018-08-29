// Title  : Logic Gates
// Author : Frank Faustino
// Date   : 2018-06-26
// Lang   : JavaScript

function NOT (b) {
  return b ? false : true
}

function AND (x, y) {
  if (x) {
    if (y) {
      return true
    } else {
      return false
    }
  } else {
    if (y) {
      return false
    }
    return false
  }
}

function NAND(x, y) {
  if (x) {
    if (y) {
      return false
    } else {
      return true
    }
  } else {
    if (y) {
      return true
    } else {
      return true
    }
  }
}

function OR(x, y) {
  if (x) {
    if (y) {
      return true
    } else {
      return true
    }
  } else {
    if (y) {
      return true
    } else {
      return false
    }
  }
}

function XOR(x, y) {
  if (x) {
    if (y) {
      return false
    } else {
      return true
    }
  } else {
    if (y) {
      return true
    } else {
      return false
    }
  }
}

