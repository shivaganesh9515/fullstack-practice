function findMaxMin(arr) {
  return { max: Math.max(...arr), min: Math.min(...arr) }; // ...arr spreads the array elements as arguments to Math.max and Math.min
}
// Example usage:
const numbers = [3, 5, 1, 8, 2];
const { max, min } = findMaxMin(numbers);
console.log("Max:", max); // Output: Max: 8
console.log("Min:", min); // Output: Min: 1