"use strict";

/**
 * solution 1 -- math formula
 * time: O(n) -- stringify num with .toFixed()
 * space: O(n) -- stringify num with .toFixed()
 *
 * @param {number} d1
 * @param {number} d2
 * @param {number} height
 * @returns {number}
 */
function cupVolume(d1, d2, height) {
    const r1 = d1 / 2;
    const r2 = d2 / 2;
    // volume of a conical frustum -- rounded to 2 decimal places
    return Number(((1 / 3) * Math.PI * height * (r1 ** 2 + r1 * r2 + r2 ** 2)).toFixed(2));
}

console.log(cupVolume(1, 1, 1)); // 0.79
console.log(cupVolume(10, 8, 10)); // 638.79
console.log(cupVolume(1000, 1000, 1000)); // 785398163.4
console.log(cupVolume(13.123, 123.12, 1)); // 4436.57
console.log(cupVolume(5, 12, 31)); // 1858.51
