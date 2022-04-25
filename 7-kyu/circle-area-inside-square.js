"use strict";

/**
 * solution 1 -- math formula
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} size - area of a square 
 * @returns {number} - area of the circle inside the square
 */
function squareAreaToCircle(size) {
    const squareSideLength = Math.sqrt(size);
    const circleRad = squareSideLength / 2;
    
    return Math.PI * (circleRad ** 2);
}

console.log( squareAreaToCircle(9) ); // ~ 7.0685834705770345
