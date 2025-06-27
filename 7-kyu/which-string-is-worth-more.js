"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} strA
 * @param {string} strB
 * @returns {string}
 */
function highestValue(strA, strB) {
    let strACharCodeSum = 0;

    for (let i = 0; i < strA.length; i++) {
        strACharCodeSum += strA.charCodeAt(i);
    }

    let strBCharCodeSum = 0;

    for (let i = 0; i < strB.length; i++) {
        strBCharCodeSum += strB.charCodeAt(i);
    }

    if (strACharCodeSum >= strBCharCodeSum) {
        return strA;
    } else {
        return strB;
    }
}

console.log(highestValue("HELLO", ""));
