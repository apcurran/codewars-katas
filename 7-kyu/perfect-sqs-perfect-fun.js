"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n + sqrt(n))
 *
 * @param {number} int
 * @returns {string}
 */
function squareIt(int) {
    const strInt = String(int);
    const intLen = strInt.length;
    const squareRootLen = Math.sqrt(intLen);

    if (!Number.isInteger(squareRootLen)) return "Not a perfect square!";

    let res = "";

    for (let i = 0; i < intLen; i += squareRootLen) {
        const chunkAmount = squareRootLen;
        const chunk = strInt.slice(i, i + chunkAmount);
        res += chunk + "\n";
    }

    return res.trim();
}

console.log(squareIt(123123123));
// "123
//  123
//  123"
