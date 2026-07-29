/**
 * solution 1 -- recursion
 * time: O(2^n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {string}
 */
function solve(n) {
    if (n === 0) {
        return "0";
    }

    if (n === 1) {
        return "01";
    }

    return solve(n - 1) + solve(n - 2);
}

console.log(solve(3)); // "01001"
