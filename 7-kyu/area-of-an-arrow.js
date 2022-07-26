"use strict";

/**
 * solution 1 
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} base
 * @param {number} rectHeight
 * @returns {number}
 */
function arrowArea(base, rectHeight) {
    const rectHalfHeight = rectHeight / 2;

    return (base * rectHalfHeight) / 2;
}

console.log( arrowArea(4, 2) ); // 2
console.log( arrowArea(7, 6) ); // 10.5

