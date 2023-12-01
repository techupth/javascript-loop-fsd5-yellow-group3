// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;
// Start coding here
for (let number of numbers) {
  if (minNumber === undefined || number < minNumber) {
    minNumber = number;
  }
}
console.log(minNumber);
