// Source : https://codewars.com/kata/one-line-task-area-or-perimeter
// Author : Frank Faustino
// Date   : 2018-07-07
// Lang   : JavaScript

// if l and w are not equal, we bitshift left <<
// which is equivalent to multiplying by two
areaOrPerimeter=(l,w)=>l-w?l+w<<1:l*w

// bitwise XOR means NOT equals
areaOrPerimeter=(l,w)=>l^w?(l+w)*2:l*w
