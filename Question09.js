// write a JS code to find duplicate values in a given array
let array = ["abc", "bcd", "cde", "dfg", "cde", "egh", "fan", "gun"];
let duplicate = [];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j] && !duplicate.includes(array[i])) {
      duplicate.push(array[i]);
    }
  }
}

console.log(duplicate);
