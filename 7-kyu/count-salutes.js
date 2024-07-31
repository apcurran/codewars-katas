"use strict";

/**
 * solution 1 -- simulation
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} hallway 
 * @returns {number}
 */
function countSalutes(hallway) {
    let rightCount = 0;
    let total = 0;

    for (let char of hallway) {
        if (char === ">") {
            rightCount++;
        } else if (char === "<") {
            total += rightCount;
        }
    }

    // multiply by 2 for salute pairs (right salutes to left, left salutes to right)
    return total * 2;
}

console.log(countSalutes("<---->---<---<-->")); // 4
