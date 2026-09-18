/**
 * solution 1
 *
 * @param {number} length
 * @returns {string}
 */
Number.prototype.toBits = function (length = 8) {
    return this.toString(2).padStart(length, "0");
};

console.log((7).toBits()); // "00000111"
