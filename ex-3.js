// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber = numbers[0];
// Start coding here
for (let number of numbers) {
  if (number < minNumber) {
    minNumber = number;
  }
}
console.log(minNumber);
