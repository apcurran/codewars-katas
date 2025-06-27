"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 *
 * @returns {number|null}
 */
String.prototype.toCents = function () {
    const isValid = /^\$\d+\.\d{2}$/.test(this);

    if (!isValid) return null;

    return Number(this.replace(/[$.]/g, ""));
};

console.log("$1".toCents()); // null
console.log("$1.23".toCents()); // 123
console.log("$99.99".toCents()); // 9999
