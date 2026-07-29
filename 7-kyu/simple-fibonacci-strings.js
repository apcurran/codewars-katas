// /**
//  * solution 1 -- recursion
//  * time: O(2^n)
//  * space: O(n)
//  *
//  * @param {number} n
//  * @returns {string}
//  */
// function solve(n) {
//     if (n === 0) {
//         return "0";
//     }

//     if (n === 1) {
//         return "01";
//     }

//     return solve(n - 1) + solve(n - 2);
// }

/**
 * solution 2 -- recursion with memoization
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {string}
 */
function solve(n, cache = new Map()) {
    if (n === 0) {
        return "0";
    }

    if (n === 1) {
        return "01";
    }

    if (cache.has(n)) {
        return cache.get(n);
    }
    // otherwise, calc solution and store in cache
    const result = solve(n - 1, cache) + solve(n - 2, cache);
    cache.set(n, result);

    return result;
}

console.log(solve(3)); // "01001"
