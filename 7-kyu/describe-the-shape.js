"use strict";

/**
 * solution 1 -- formula
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} angles 
 * @returns {string}
 */
function describeTheShape(angles) {
    // check if 2 or fewer angles
    if (angles <= 2) return "this will be a line segment or a dot";

    // math formula
    // each angle is (n−2) × 180° / n
    const angleMeasure = (angles - 2) * (180 / angles);
    
    return `This shape has ${angles} sides and each angle measures ${Math.floor(angleMeasure)}`;
}

console.log( describeTheShape(6) ); // "This shape has 6 sides and each angle measures 120"
console.log( describeTheShape(3) ); // "This shape has 3 sides and each angle measures 60"
