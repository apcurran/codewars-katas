"use strict";

/**
 * solution 1 -- math -> Pythagorean theorem version
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} r 
 * @returns {number} largest square area
 */
function areaLargestSquare(r) {
    const c = r * 2;
    const a = Math.sqrt((c ** 2) / 2);

    return Math.round(a * a);
}

console.log(areaLargestSquare(7)); // 98
console.log(areaLargestSquare(15)); // 450
console.log(areaLargestSquare(22)); // 968
