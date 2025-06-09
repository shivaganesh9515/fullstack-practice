function removeDuplicates(nums) {
    let i = 0;
    for (let n of nums)
        if (n !== nums[i]) nums[++i] = n;
    return nums.length ? i + 1 : 0;
}
// Example usage:
let nums = [1, 1, 2, 2, 3, 4];
let newLength = removeDuplicates(nums);
console.log(newLength); // Output: 4
console.log(nums.slice(0, newLength)); // Output: [1, 2, 3, 4]