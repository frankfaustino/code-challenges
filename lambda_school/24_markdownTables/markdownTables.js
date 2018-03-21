/* ———
 * Convert an array of data into a table in markdown format.
 * Example input:
 * ['name,email', 'emily,emily@email.com', 'mary,maryberry@gbbs.co.uk']
 * 
 * 
 * Example output (raw):
 * |name|email|
 * |----|-----|
 * |emily|emily@email.com|
 * |mary|maryberry@gbbs.co.uk|
 * 
 * Note: Headers will always be strings and the first item in the array.
 * Data always separated with commas, but values may not always be strings.
 * ——— */

const markdownTables = arr => {
  // Code here
}

markdownTables(['number', 2, 3, 4, 5, 6]) // '|number|\n|------|\n|2|\n|3|\n|4|\n|5|\n|6|'
