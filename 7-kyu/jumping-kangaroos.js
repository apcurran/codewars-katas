"use strict";

/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} kanga1
 * @param {number} rate1
 * @param {number} kanga2
 * @param {number} rate2
 * @returns {boolean}
 */
function kangaroo(kanga1, rate1, kanga2, rate2) {
    const jumpsUntilMeeting = (kanga2 - kanga1) / (rate1 - rate2);

    // if jumps is negative or a fraction, they do not meet
    return jumpsUntilMeeting > 0 && Number.isInteger(jumpsUntilMeeting);
}

console.log(kangaroo(0, 3, 4, 2)); // true
