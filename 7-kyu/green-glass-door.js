/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @returns {boolean}
 */
function stepThroughWith(s) {
    const twoConsecutiveCharsRegex = /(\w)\1/;

    return twoConsecutiveCharsRegex.test(s);
}

console.log(stepThroughWith("glasses")); // true
console.log(stepThroughWith("airplane")); // false
