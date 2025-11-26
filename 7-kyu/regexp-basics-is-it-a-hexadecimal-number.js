/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(1)
 *
 * @returns {boolean}
 */
String.prototype.hexNumber = function () {
    const hexadecimalRegex = /^(0x)?[0-9a-f]+$/i;

    return hexadecimalRegex.test(this);
};

console.log("".hexNumber()); // false
console.log("0x".hexNumber()); // false
console.log("0".hexNumber()); // true
console.log("0xDEADBEEF".hexNumber()); // true
