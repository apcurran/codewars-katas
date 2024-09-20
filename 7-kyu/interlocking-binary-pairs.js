"use strict";

/**
 * solution 1 -- bitwise operator &
 * time: O(1)
 * space: O(1)
 * 
 * @param {BigInt} a 
 * @param {BigInt} b 
 * @returns {boolean}
 */
function interlockable(a, b) {
    return (a & b) === BigInt(0);
}
