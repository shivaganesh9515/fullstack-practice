function topKFrequent(nums, k) {
    const count = {};
    nums.forEach(n => count[n] = (count[n] || 0) + 1);
    return Object.entries(count)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => Number(num));
}

// Example usage:
const nums = [1,1,1,2,2,3];
const k = 2;
console.log(topKFrequent(nums, k)); // Output: [1, 2]