function reverseArray(arr) {
  return arr.slice().reverse();
}
// Example usage:
const numbers = [1, 2, 3, 4, 5];
const reversed = reverseArray(numbers);
console.log(reversed); // Output: [5, 4, 3, 2, 1]