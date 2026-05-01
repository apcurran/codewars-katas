/**
 * solution 1
 * time: O(n * log n) -- sort
 * space: O(n) -- sort
 *
 * @param {number[]} shuffled
 * @returns {number[]}
 */
function shuffledArray(shuffled) {
    const grandTotal = shuffled.reduce((sum, curr) => sum + curr, 0);
    const problemValue = grandTotal / 2;
    const problemValueFirstIndex = shuffled.indexOf(problemValue);
    // remove problem value
    shuffled.splice(problemValueFirstIndex, 1);

    return shuffled.sort(function sortAsc(a, b) {
        return a - b;
    });
}

console.log(shuffledArray([1, 12, 3, 6, 2])); // [1, 2, 3, 6]
console.log(shuffledArray([1, -3, -5, 7, 2])); // [-5, -3, 2, 7]
console.log(shuffledArray([2, -1, 2, 2, -1])); // [-1, -1, 2, 2]
console.log(shuffledArray([-3, -3])); // [-3]
