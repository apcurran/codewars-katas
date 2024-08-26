"use strict";

/**
 * solution 1 -- heron's formula
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {boolean}
 */
function equableTriangle(a, b, c) {
    // heron's formula for a triangle with 3 known sides
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    const perimeter = a + b + c;

    return area === perimeter;
}

console.log(equableTriangle(5, 12, 13)); // true
console.log(equableTriangle(2, 3, 4)); // false
console.log(equableTriangle(6, 8, 10)); // true
console.log(equableTriangle(7, 15, 20)); // true
