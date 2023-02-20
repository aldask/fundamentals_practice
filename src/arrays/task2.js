// Create an empty array for even-indexed letters
const evenIndexArray = [];

// Create an empty array for prime-indexed letters
const primeIndexArray = [];

// Define the input string
const inputString = "devMentor - path to the developer career";

// Iterate through the string letters
for (let i = 0; i < inputString.length; i++) {
  // Check if the index is even
  if (i % 2 === 0) {
    // Push the letter to the even index array
    evenIndexArray.push(inputString[i]);
  }

  // Check if the index is prime
  if (isPrime(i)) {
    // Push the letter to the prime index array
    primeIndexArray.push(inputString[i]);
  }
}

// Print the arrays to the console
console.log("Even index array:", evenIndexArray);
console.log("Prime index array:", primeIndexArray);

// Function to check if a number is prime
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

