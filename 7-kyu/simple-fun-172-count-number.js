"use strict";

/**
 * solution 1 -- brute force (TLE)
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number} n 
 * @param {number} targetX 
 * @returns {number}
 */
function countNumber(n, targetX) {
    let targetNumCount = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            const cellValue = i * j;

            if (cellValue === targetX) {
                targetNumCount++;
            }
        }
    }

    return targetNumCount;
}

console.log(countNumber(5, 5)); // 2
console.log(countNumber(6, 12)); // 4
