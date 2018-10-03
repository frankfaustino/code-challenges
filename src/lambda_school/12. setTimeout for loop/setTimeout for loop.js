/* ———
 * Explain what is wrong with this code and how you would fix this. The output should be 1, 2, 3, ...10.
 * Right now it just prints 11.
 * With ES6 there is a very, very simple way to solve this. See if you can solve this with just ES5 JS.
 * Moving the console.log outside of the setTimeout is not a valid solution.
 * ——— */

for (var i = 1; i <= 10; i++) {
  setTimeout(function() {
    // From looking at the code you would assume it would print 1 — 10
    // It doesn't. Why? How can you make it print 1 — 10.
    console.log(i)
  }, 0)
}
