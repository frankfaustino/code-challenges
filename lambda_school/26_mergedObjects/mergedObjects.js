/* ———
 * Write a function that given an array of objects will return a single merged object,
 * where duplicate keys have the last value given.
 * ——— */

const mergedObjects = arr => {
  // Code here
}

const arr = [
  {1: '1', 2: '2', 3: '3'},
  {3: '4', 4: '4', 5: '6'},
  {5: '5', 6: '6', 7: '7'},
]

mergedObjects(arr) // {1: '1', 2: '2': 3: '4', 4: '4', 5: '5', 6: '6', 7: '7'}