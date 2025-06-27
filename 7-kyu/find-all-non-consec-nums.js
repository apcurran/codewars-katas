"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {object[]}
 */
function allNonConsecutive (arr) {
    if (arr.length === 1) return [];

    let nonConsecutiveNums = [];

    for (let i = 1; i < arr.length; i++) {
        const previousNum = arr[i - 1];
        const expectedCurrentNum = previousNum + 1;
        const actualCurrentNum = arr[i];

        if (actualCurrentNum !== expectedCurrentNum) {
            const nonConsecutiveNumData = { i: i, n: actualCurrentNum };
            nonConsecutiveNums.push(nonConsecutiveNumData);
        }
    }

    return nonConsecutiveNums;
}

console.log( allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]) );
// [{i: 4, n:6}, {i: 7, n:10}]
