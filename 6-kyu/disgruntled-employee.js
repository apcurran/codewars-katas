"use strict";

/**
 * Solution 1
 * Time: O(n)
 * 
 * @param {number} n 
 * @returns {number[]}
 */
function off(n) {
    let offSwitches = [];

    for (let i = 1; i <= n; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            offSwitches.push(i);
        }
    }

    return offSwitches;
}

console.log( off(4) ); // [1, 4]
