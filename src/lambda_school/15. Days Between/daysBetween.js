/* ———
 * Calculate and return the number of days between two dates as a string.
 * Dates may be in any combination of ISO, short or long formats.
 * ——— */

const daysBetween = (start, end) => {
  // Code here
}

console.log(daysBetween('11/05/2017', '11/04/2017')) // -1
console.log(daysBetween('Nov 4, 2017', '11/05/2017')) // 1
console.log(daysBetween('November 4, 2017', '5 Nov, 2017')) // 1
console.log(daysBetween('Nov 4, 2017', '11/04/2017')) // 0