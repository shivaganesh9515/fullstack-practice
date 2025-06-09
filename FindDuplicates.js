function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}

// Example usage:
const array = [1, 2, 3, 4, 2, 5, 1, 6, 3];
console.log([...new Set(findDuplicates(array))]); // Output: [2, 1, 3]
