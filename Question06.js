//  Write a JS code to find the no of digits in a number.

function countDigit(array) {
  return array.map((number) => number.toString().length);
}

// Testing
let myArray = [123, 4567, 89, 10000];
let digitCounts = countDigit(myArray);
console.log(digitCounts);
