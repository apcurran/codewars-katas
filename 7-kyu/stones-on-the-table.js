"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} stones 
 * @returns {number}
 */
function solve(stones) {
    let stoneRemovalCount = 0;

    for (let i = 0; i < stones.length; i++) {
        const currStoneClr = stones[i];
        const prevStoneClr = stones[i - 1];

        if (currStoneClr === prevStoneClr) stoneRemovalCount++;
    }

    return stoneRemovalCount;
}

console.log( solve("RGGRGBBRGRR") ); // 3
console.log( solve("RRRRGGGGBBBB") ); // 9
