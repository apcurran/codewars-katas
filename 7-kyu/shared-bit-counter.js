"use strict";

/**
 * solution 1
 * n = sharedOneBits lengths
 * time: O(n)
 * space: O(n)
 *
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
function sharedBits(a, b) {
    const sharedOneBits = (a & b).toString(2);
    let oneBitsCounter = 0;

    for (let i = sharedOneBits.length - 1; i >= 0; i--) {
        if (sharedOneBits[i] === "1") {
            oneBitsCounter++;
        }

        if (oneBitsCounter >= 2) {
            return true;
        }
    }

    return false;
}

console.log(sharedBits(7, 15)); // true
console.log(sharedBits(16, 8)); // false
