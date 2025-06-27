"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {"even"|"odd"} parity
 * @param {string} binValue
 * @returns {number}
 */
function checkParity(parity, binValue) {
    let oneBitsCount = 0;

    for (let bit of binValue) {
        if (bit === "1") oneBitsCount++;
    }

    if (parity === "even") {
        return oneBitsCount % 2;
    } else {
        return (oneBitsCount + 1) % 2;
    }
}

console.log(checkParity("even", "101010")); // 1
console.log(checkParity("odd", "101010")); // 0
