"use strict";

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} value 
 * @returns {number}
 */
function facRecursion(value) {
    if (value < 0) return 0;
    
    if (value === 0 || value === 1) return 1;

    return value * facRecursion(value - 1);
}

console.log( facRecursion(4) ); // 24
