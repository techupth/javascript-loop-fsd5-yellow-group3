// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;
// Start coding here
if (numbers.length > 0) {
    minNumber = numbers[0]; 
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < minNumber) {
        minNumber = numbers[i]; 
      }
    }
  }
  console.log(minNumber);
