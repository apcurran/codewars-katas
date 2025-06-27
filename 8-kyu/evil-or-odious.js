"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {string}
 */
function evil(n) {
    const binaryStr = n.toString(2);
    const onesDigitCount = binaryStr.match(/1/g)?.length;
    const isEvenOnesDigitCount = onesDigitCount % 2 === 0;

    return isEvenOnesDigitCount ? "It's Evil!" : "It's Odious!";
}

console.log(evil(1)); // "It's Odious!"
