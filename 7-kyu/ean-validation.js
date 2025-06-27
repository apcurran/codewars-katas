"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {string} eanCode
 * @returns {boolean}
 */
function validateEAN(eanCode) {
    let total = 0;

    for (let i = 0; i < eanCode.length; i++) {
        const digit = Number(eanCode[i]);

        if (i % 2 === 0) {
            total += digit;
        } else {
            total += digit * 3;
        }
    }

    return total % 10 === 0;
}

console.log(validateEAN("400330101839")); // false (checksum: 8)
