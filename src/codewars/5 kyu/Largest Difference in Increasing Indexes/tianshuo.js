// Source : https://www.codewars.com/kata/largest-difference-in-increasing-indexes/javascript
// Author : tianshuo
// Date   : 2017-12-30
// Perf   : https://jsperf.com/lajsfailsf777777

/*
* This algorithm solves the kata in O(n*log(n)) using binary search
* The comb function returns a boolean for a difference
* For different differences, the return values for comb must be like this
* [true,true,true,....,true,false,false,....,false]
*
* The answer to this kata is the last true value, and this can be found
* by narrowing the bounds by half every time.
*/

var comb=function(data,diff){
  for(var i=0;i<data.length-diff;i++){
    if(data[i]<=data[i+diff]){return true;}
  }
  return false;
};

var largestDifference = function(data) {
  
  var upperBound=data.length-1, lowerBound=0;
  if(comb(data,upperBound)){
    return upperBound;
  }else if(!comb(data,lowerBound)){
    return lowerBound;
  }
  
  var checkUpper=true; //Start binary search from upper bound
  while(upperBound-lowerBound!=1){
    var middle=checkUpper ? Math.ceil((lowerBound+upperBound-1)/2) :Math.floor((lowerBound+upperBound+1)/2)
    var checked=comb(data,middle);
    if(checked){
      // Move lowerBound up
      lowerBound=middle;
      checkUpper=true;
    }else{
      // Move lowerBound down
      upperBound=middle;
      checkUpper=false;
    }
  }
  return lowerBound;
};

console.log(largestDifference([3,2,1])) // == 0 // never finds i<j such that data[i] <= data[j]
console.log(largestDifference([9,4,1,2,3,0,-1,-2])) // == 2
console.log(largestDifference([9,4,1,2,3,4,0,-1,-2])) // == 4
