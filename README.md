# fullstack-practice
Assignments for Array &amp; DSA

Two Sum Problem

This is a simple JavaScript function that finds two numbers in an array that add up to a target number. It returns the indices of those two numbers.

It looks at each number in the array.
Then it checks all the numbers after it to see if any two add up to the target.
Once it finds a pair that adds up to the target, it returns their positions (indexes).

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

Time complexity is O(n²) because of the two loops checking pairs.
Space complexity is O(1) because we only use a few variables, no extra data structures.

--------------------------------------------------------------------------------------------------------------------------------------------------------------

# Remove Duplicates from Sorted Array

This function takes a sorted array and removes all the duplicate numbers from it. It returns the new length of the array without duplicates, and you can see the updated array with unique numbers.

It uses a pointer `i` to keep track of the position of unique numbers.
It loops through the array and whenever it finds a new number different from the last unique one, it moves that number forward.
At the end, it returns the count of unique numbers.

Code example

```js
function removeDuplicates(nums) {
    let i = 0;
    for (let n of nums)
        if (n !== nums[i]) nums[++i] = n;
    return nums.length ? i + 1 : 0;
}

// Example:
let nums = [1, 1, 2, 2, 3, 4];
let newLength = removeDuplicates(nums);
console.log(newLength); // Output: 4
console.log(nums.slice(0, newLength)); // Output: [1, 2, 3, 4]
```

## Time and Space Complexity

Time complexity: **O(n)**, since it goes through the array once.
Space complexity: **O(1)** because it doesn’t use extra space, just modifies the array in place.

--------------------------------------------------------------------------------------------------------------------------------------------------------------

**Find Max and Min in an Array**

```js
function findMaxMin(arr) {
  return { max: Math.max(...arr), min: Math.min(...arr) }; // ...arr spreads the array elements as arguments to Math.max and Math.min
}

// Example usage:
const numbers = [3, 5, 1, 8, 2];
const { max, min } = findMaxMin(numbers);
console.log("Max:", max); // Output: Max: 8
console.log("Min:", min); // Output: Min: 1
```
I used `Math.max` and `Math.min` to get the highest and lowest values.
The `...arr` spreads the array values like separate inputs to these functions.
So it’s easy and clean!

Time: O(n) – because it checks each number once.
Space: O(1) – no extra array or data used.

--------------------------------------------------------------------------------------------------------------------------------------------------------------

**Reverse an Array (In-place)**

```javascript
function reverseArray(arr) {
  return arr.slice().reverse();
}
// Example usage:
const numbers = [1, 2, 3, 4, 5];
const reversed = reverseArray(numbers);
console.log(reversed); // Output: [5, 4, 3, 2, 1]
```

Used `slice()` to make a copy so the original array stays safe.
Then applied `.reverse()` to flip the copied array.
Simple and works perfectly!

Time & Space Complexity

Time:O(n) – it looks at each element once.
Space: O(n) – because of the `.slice()` copy.

--------------------------------------------------------------------------------------------------------------------------------------------------------------


**Rotate an Array by K Positions (Right Rotation)**

```js
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
```

First, `k % nums.length` makes sure `k` isn’t bigger than the array.
`splice(-k)` grabs the last `k` elements.
Then `unshift(...moved)` pushes them to the front.

Time & Space Complexity

Time: O(n) – because of `splice` and `unshift`.
Space: O(k) – temporary array of `k` elements created.

--------------------------------------------------------------------------------------------------------------------------------------------------------------































































