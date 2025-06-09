function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}
// Example usage:
let nums = [3, 7, 6, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
// Explanation: The function finds two indices in the array `nums` such that their values add up to `target`.
// In this case, nums[0] + nums[1] = 2 + 7 = 9.
