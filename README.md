# fullstack-practice
Assignments for Array &amp; DSA

Two Sum Problem

This is a simple JavaScript function that finds two numbers in an array that add up to a target number. It returns the indices of those two numbers.

* It looks at each number in the array.
* Then it checks all the numbers after it to see if any two add up to the target.
* Once it finds a pair that adds up to the target, it returns their positions (indexes).

Code example

```js
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

// Example:
let nums = [3, 7, 6, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
```

## Time and Space Complexity

* Time complexity is **O(n²)** because of the two loops checking pairs.
* Space complexity is **O(1)** because we only use a few variables, no extra data structures.
