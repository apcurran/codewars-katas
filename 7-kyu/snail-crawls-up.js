"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} columnTotalHeight 
 * @param {number} dayCrawlUpHeight 
 * @param {number} nightSlideDownHeight 
 * @returns {number}
 */
function snail(columnTotalHeight, dayCrawlUpHeight, nightSlideDownHeight) {
    let currentHeight = 0;
    let daysCount = 0;

    while (currentHeight < columnTotalHeight) {
        currentHeight += dayCrawlUpHeight;
        daysCount++;

        // return early if height is reached
        if (currentHeight >= columnTotalHeight) return daysCount;

        currentHeight -= nightSlideDownHeight;
    }

    return daysCount;
}

console.log( snail(3, 2, 1) ); // 2
console.log( snail(10, 3, 1) ); // 5
