/* ———
 * Bubble Sort is a sorting algorithm that compares the first element of an array with the second element.
 * If the first element is greater than the second element then it swaps them.
 * Then it compares the second and third elements and swaps them if the second is larger.
 * Then it compares the third and fourth elements and does the same.
 * This continues and the the larger elements begin to "bubble" towards the end.
 * The loop then restarts and repeats this process until it makes a clean pass
 * without performing any swaps.
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 * What's the time complexity of your algorithm?  Are there ways you can improve it?
 * ——— */

const bubbleSort = (arr) => {
  // Code here
}

bubbleSort([2,1,3]) // [1,2,3]
bubbleSort([4,1,2,3]) // [1,2,3,4]
bubbleSort([9,8,7,6,5,4,3,2,1]) // [1,2,3,4,5,6,7,8,9]