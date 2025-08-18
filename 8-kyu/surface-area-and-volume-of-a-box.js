"use strict";

/**
 *
 * @param {number} width
 * @param {number} height
 * @param {number} depth
 * @returns {[number, number]}
 */
function getSize(width, height, depth) {
    const surfaceArea = 2 * (width * height + width * depth + height * depth);
    const volume = width * height * depth;

    return [surfaceArea, volume];
}

console.log(getSize(4, 2, 6)); // [88, 48]
