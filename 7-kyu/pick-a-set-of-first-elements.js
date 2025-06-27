/**
 *
 * @param {string[]} arr - Array of elements
 * @param {number} n - Number of elements to include in a returned sequence
 * @returns {string[]} - Returned sequence
 */
function first(arr, n = 1) {
    return arr.slice(0, n);
}

// console.log(first(['a', 'b', 'c', 'd', 'e']));
// console.log(first(['a', 'b', 'c', 'd', 'e'], 2));
// console.log(first(['a', 'b', 'c', 'd', 'e'], 3));
console.log(first(["a", "b", "c", "d", "e"], 0));
