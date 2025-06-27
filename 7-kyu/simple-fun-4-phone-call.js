"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} min1
 * @param {number} min2_10
 * @param {number} min11
 * @param {number} centsLeft
 * @returns {number} total minutes
 */
function phoneCall(min1, min2_10, min11, centsLeft) {
    let totalMinutes = 0;

    if (centsLeft < min1) {
        return totalMinutes;
    }

    // 1st minute of call
    centsLeft -= min1;
    totalMinutes++;

    // 2nd to 10th minute of call
    for (let i = 2; i <= 10; i++) {
        centsLeft -= min2_10;

        if (centsLeft < 0) {
            return totalMinutes;
        }

        totalMinutes++;

        if (centsLeft === 0) {
            return totalMinutes;
        }
    }

    // minutes 11 and beyond of call
    const minutes11AndBeyond = Math.floor(centsLeft / min11);
    totalMinutes += minutes11AndBeyond;

    return totalMinutes;
}

console.log(phoneCall(3, 1, 2, 20)); // 14
console.log(phoneCall(2, 2, 1, 2)); // 1
console.log(phoneCall(10, 1, 2, 22)); // 11
console.log(phoneCall(2, 2, 1, 24)); // 14
console.log(phoneCall(1, 2, 1, 6)); // 3
