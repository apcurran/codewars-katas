"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} silly
 * @returns {string}
 */
function sillycase(silly) {
    const lowercaseUpTo = Math.ceil(silly.length / 2);
    const lowerPortion = silly.slice(0, lowercaseUpTo).toLowerCase();
    const upperPortion = silly.slice(lowercaseUpTo).toUpperCase();
    
    return `${lowerPortion}${upperPortion}`;
}

console.log(sillycase("brian")); // briAN
