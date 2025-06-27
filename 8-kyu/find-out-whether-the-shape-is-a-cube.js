"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} volume
 * @param {number} side
 * @returns {boolean}
 */
function cubeChecker(volume, side) {
    if (volume <= 0 || side <= 0) return false;

    const cubeRoot = Math.cbrt(volume);

    return cubeRoot === side;
}

console.log(cubeChecker(56.3, 1)); // false
console.log(cubeChecker(8, 2)); // true
