//  Write a JS code to find the largest number in an array.

let maxNumber = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    return `The maximum number is ${max}`;
  }
};

let arr = [20, 8, -2, 80];
console.log(maxNumber(arr));
