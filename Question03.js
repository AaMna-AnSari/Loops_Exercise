// rite a JS code to delete all occurrence of element in given array.

function removeElement(arr, element) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== element) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

let arr = [2, 22, 32, 2, 6, 12];
newArr = removeElement(arr, 2);
console.log(newArr);
