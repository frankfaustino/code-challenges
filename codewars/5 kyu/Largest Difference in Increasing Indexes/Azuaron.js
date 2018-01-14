// Source : https://www.codewars.com/kata/largest-difference-in-increasing-indexes/javascript
// Author : Azuaron
// Perf   : https://jsperf.com/lajsfailsf777777

var largestDifference = function(data) {
  var i = 0, len = data.length, diff = len - 1;
  while(diff > 0) {
    if(data[i] <= data[i + diff]) return diff;
    if(i + diff + 1 >= len) {i = 0; diff--;}
    else i++;
  }
  return 0;
};

console.log(largestDifference([3,2,1]))               // 0
console.log(largestDifference([9,4,1,2,3,0,-1,-2]))   // 2
console.log(largestDifference([9,4,1,2,3,4,0,-1,-2])) // 4
