function rotateArray(nums, k) {
  k = k % nums.length;
  const moved = nums.splice(-k);
  nums.unshift(...moved);
}
// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(arr, k);
console.log(arr); // Output: [5, 6, 7, 1, 2, 3, 4]