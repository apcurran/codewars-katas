/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} s
 * @param {number} gcd
 * @returns {number}
 */
function solve(s, gcd) {
    // sum not divisible by GCD? mathematically impossible
    if (s % gcd !== 0) return -1;

    const a = gcd;
    const b = s - gcd;

    if (b <= 0) {
        return -1;
    } else {
        return [a, b];
    }
}

console.log(solve(6, 3)); // [3, 3]
console.log(solve(8, 2)); // [2, 6]
console.log(solve(10, 3)); // -1
console.log(solve(12, 4)); // [4, 8]
console.log(solve(12, 5)); // -1
