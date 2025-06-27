"use strict";

/**
 * solution 1
 * time: O(n log n) -- Set.has() is faster than O(n) time
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {string}
 */
function bingo(arr) {
    const bingoNums = [2, 9, 14, 7, 15];
    const nonDupsArrSet = new Set(arr);

    for (let num of bingoNums) {
        if (nonDupsArrSet.has(num)) continue;

        return "LOSE";
    }

    return "WIN";
}

console.log( bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ); // "LOSE"
console.log( bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]) ); // "WIN"
