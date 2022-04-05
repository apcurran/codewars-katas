"use strict";

/**
 * 
 * @param {number} num 
 * @returns {number}
 */
function closestMultiple10(num) {
    return Math.round(num / 10) * 10;
}

console.log( closestMultiple10(23) ); // 20
