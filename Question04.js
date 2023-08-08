//  Write a JS code to find the power of a number using for loop.
function calculatePowers(base, exponent) {
  let resultArray = [];
  for (let i = 0; i < base.length; i++) {
    let result = 1;
    for (let j = 0; j < exponent; j++) {
      result *= base[i];
    }
    resultArray.push(result);
  }
  return resultArray;
}

let bases = [2, 3, 4];
let exponentValue = 3;

let resultArray = calculatePowers(bases, exponentValue);
console.log(resultArray);
