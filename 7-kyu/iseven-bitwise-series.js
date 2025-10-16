/**
 * solution 1 -- bitwise AND operator
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {boolean}
 */
function isEven(n) {
    // if last digit is 0 it must be even
    const lastDigit = n & 1;

    return lastDigit === 0;
}

console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isEven(14)); // true
