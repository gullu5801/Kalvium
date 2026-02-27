function sumOfDigits(n) {

  // TODO: Base Case → If the number is 0, return 0
  if (n === 0) {
    return 0;
  }

  // TODO: Extract the last digit using modulus (%) operator
  const lastDigit = n % 10;

  // TODO: Remove the last digit using Math.floor()
  const remainingDigits = Math.floor(n / 10);

  // TODO: Recursively calculate the sum of the remaining digits
  const recursiveSum = sumOfDigits(remainingDigits);

  // TODO: Add last digit + recursive result and return the value
  return lastDigit + recursiveSum;
}

//Test Cases

console.log("Test Case 1 (Small number):", sumOfDigits(123)); 

console.log("Test Case 2 (Number with zeros):", sumOfDigits(4020)); 

console.log("Test Case 3 (Single digit):", sumOfDigits(7)); 

console.log("Test Case 4 (Large number):", sumOfDigits(987654321)); 

console.log("Test Case 5 (Zero):", sumOfDigits(0)); 