// Title  : Budget Allocation
// Source : https://www.pramp.com
// Author : Frank Faustino
// Date   : 02/04/2019

function findGrantsCap(grants, newBudget) {
  const avg = newBudget / grants.length
  const arr = []

  for (let i = 0; i < grants.length; i++) {
    if (grants[i] < avg) {
      return findGrantsCap([...arr, ...grants.slice(i + 1)], newBudget - grants[i])
    } else {
      arr.push(grants[i])
    }
  }

  return avg
}

module.exports = findGrantsCap