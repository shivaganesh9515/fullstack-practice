function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
}
// Example usage:
let nums = [3, 7, 6, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
// Explanation: The function finds two indices in the array `nums` such that their values add up to `target`.
// In this case, nums[0] + nums[1] = 2 + 7 = 9.