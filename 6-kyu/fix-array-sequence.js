/**
 * solution 1
 * time: O(n * log n * log n)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function solve(arr) {
    return arr.sort(function name(a, b) {
        return threesOf(b) - threesOf(a) || a - b;
    });
}

/**
 * @param {number} n
 * @returns {number}
 */
function threesOf(n) {
    return n % 3 === 0 ? threesOf(n / 3) + 1 : 0;
}

console.log(solve([12, 3, 9, 4, 6, 8])); // [9,3,6,12,4,8]
