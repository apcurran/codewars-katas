"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} compasses 
 * @param {number} gears 
 * @param {number} tablets 
 * @returns {number}
 */
function solve(compasses, gears, tablets) {
    // count distinct sets of three different glyphs (each set worth 7 pts)
    const inventorySetDistinctCount = Math.min(compasses, gears, tablets);
    const inventorySetDistinctPoints = inventorySetDistinctCount * 7;
    // amt of each glyph is squared and then summed
    const squaredAndSummedGlyphPoints = compasses ** 2 + gears ** 2 + tablets ** 2;
    // sum both preceding steps for a grand total
    return inventorySetDistinctPoints + squaredAndSummedGlyphPoints;
}

console.log( solve(1, 1, 1) ); // 10
console.log( solve(4, 2, 2) ); // 38
