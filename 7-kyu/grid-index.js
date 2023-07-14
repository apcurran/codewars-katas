"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {string[][]} grid 
 * @param {number[]} indices 
 * @returns {string}
 */
function gridIndex(grid, indices) {
    const flattenedGrid = grid.flat();
    let result = "";

    for (let index of indices) {
        const zeroIndexed = index - 1;
        const char = flattenedGrid[zeroIndexed];
        result += char;
    }

    return result;
}

console.log(gridIndex(
    [["m", "y", "e"],
    ["x", "a", "m"],
    ["p", "l", "e"]],
    [1, 3, 5, 8]
)); // "meal"
