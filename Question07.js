// Write a JS code to calculate the sum of digits in a number.
function sumDigits(number) {
  let sum = 0;
  const digits = number.toString().split("");
  for (let digit of digits) {
    sum += parseInt(digit);
  }
  return sum;
}

//testing
console.log(sumDigits(5678123));
