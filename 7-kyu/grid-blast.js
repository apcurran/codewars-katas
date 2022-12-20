"use strict";

// /**
//  * solution 1
//  * time: O(1)
//  * space: O(1)
//  * 
//  * @param {number} x 
//  * @param {number} y 
//  * @returns {string}
//  */
// function fire(x, y) {
//     const myGrid = [
//         ["top left",    "top middle",    "top right",],
//         ["middle left", "center",        "middle right"],
//         ["bottom left", "bottom middle", "bottom right"]
//     ];

//     return myGrid[y][x];
// }

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {string}
 */
function fire(x, y) {
    return grid[x + (3 * y)];
}

console.log( fire(0, 0) ); // "top left"
console.log( fire(1, 2) ); // "bottom middle"
