/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {string}
 */
function pofi(n) {
    const imaginaryUnitPattern = ["1", "i", "-1", "-i"];

    // after 4 multiplications,
    // the pattern just loops around to the beginning
    return imaginaryUnitPattern[n % 4];
}

console.log(pofi(0)); // Expected: '1'
console.log(pofi(1)); // Expected: 'i'
console.log(pofi(2)); // Expected: '-1'
console.log(pofi(3)); // Expected: '-i'
console.log(pofi(4)); // Expected: '1'
console.log(pofi(5)); // Expected: 'i'
console.log(pofi(6)); // Expected: '-1'
console.log(pofi(7)); // Expected: '-i'
console.log(pofi(8)); // Expected: '1'
console.log(pofi(9)); // Expected: 'i'
console.log(pofi(10)); // Expected: '-1'
