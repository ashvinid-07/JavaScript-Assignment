// Import the necessary modules
import { add, subtract } from './math.js';

// Define a function to calculate the sum of two numbers
/**
 * Calculates the sum of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function calculateSum(a, b) {
  // Check if the inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers.');
  }

  // Calculate the sum using the add function from the math module
  const sum = add(a, b);
  return sum;
}

// Define a function to calculate the difference of two numbers
/**
 * Calculates the difference of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference of the two numbers.
 */
function calculateDifference(a, b) {
  // Check if the inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers.');
  }

  // Calculate the difference using the subtract function from the math module
  const difference = subtract(a, b);
  return difference;
}

// Use the functions to calculate the sum and difference of two numbers
const num1 = 10;
const num2 = 20;
const sum = calculateSum(num1, num2);
const difference = calculateDifference(num1, num2);

// Log the results to the console
console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
console.log(`The difference of ${num1} and ${num2} is ${difference}.`);