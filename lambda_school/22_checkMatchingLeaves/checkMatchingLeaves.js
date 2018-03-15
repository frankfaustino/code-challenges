/* ———
 * Write a function called checkMatchingLeaves that takes in an object,
 * and return true if every property on the object is the same, otherwise, return false.
 * ——— */

const checkMatchingLeaves = object => {
  // Code here
}


const tree1 = {
  x: 1,
  y: 1,
  z: 1,
}
const tree2 = {
  x: 1,
  y: 1,
  z: 2,
}
const tree3 = {
  x: 1,
  y: 1,
  z: 1,
  xa: {
    xx: 1,
    xy: 1,
    xz: 1,
    zz: {
      a: {
        b: {
          z: 1,
        },
      },
    },
  },
}
const tree4 = {
  x: 1,
  y: 1,
  z: 1,
  xa: {
    xx: 1,
    xy: 1,
    xz: 1,
    zz: {
      a: {
        b: {
          z: 2,
        },
      },
    },
  },
  r: 1,
}

console.log(checkMatchingLeaves(tree1)) // true
console.log(checkMatchingLeaves(tree2)) // false
console.log(checkMatchingLeaves(tree3)) // true
console.log(checkMatchingLeaves(tree4)) // false