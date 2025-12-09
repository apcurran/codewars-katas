"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} squareOneSide
 * @param {number} squareTwoSide
 * @param {number} suitcaseSideA
 * @param {number} suitcaseSideB
 * @returns {boolean}
 */
function fit_in(squareOneSide, squareTwoSide, suitcaseSideA, suitcaseSideB) {
    const suitcaseMinLength = squareOneSide + squareTwoSide;
    const suitcaseMinWidth = Math.max(squareOneSide, squareTwoSide);

    const suitcaseActualLength = Math.max(suitcaseSideA, suitcaseSideB);
    const suitcaseActualWidth = Math.min(suitcaseSideA, suitcaseSideB);

    return suitcaseMinLength <= suitcaseActualLength && suitcaseMinWidth <= suitcaseActualWidth;
}

console.log(fit_in(1, 2, 3, 2)); // true
console.log(fit_in(1, 2, 2, 1)); // false
console.log(fit_in(3, 2, 3, 2)); // false
console.log(fit_in(1, 2, 1, 2)); // false
console.log(fit_in(6, 5, 8, 7)); // false
