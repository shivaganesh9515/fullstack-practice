function findUniqueElements(arr) {
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
}

// Example usage:
let nums = [1, 2, 3, 2, 4, 1, 5];
console.log(findUniqueElements(nums)); // Output: [3, 4, 5]
