/**
 * solution 1
 * time: O(n * log n)
 * space: O(n) -> sorting
 *
 * @param {...number[]} arrays
 * @returns {number}
 */
function nthSmallest(...arrays) {
    const n = arrays.pop();
    const sortedFlatArr = arrays.flat(Infinity).sort((a, b) => a - b);

    return sortedFlatArr[n - 1];
}

console.log(nthSmallest([1, 5], [2], [4, 8, 9], 4)); // 5
