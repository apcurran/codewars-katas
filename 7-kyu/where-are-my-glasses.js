"use strict";

/**
 * solution 1 -- regex
 * n = arr length
 * m = str element length
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {string[]} arr 
 * @returns {number} index of array element containing glasses string
 */
function findGlasses(arr) {
    return arr.findIndex(function hasGlasses(str) {
        const glassesRegex = /O-+O/;
        
        return glassesRegex.test(str);
    });
}

console.log(findGlasses(["phone", "O-O", "coins", "keys"])); // 1
