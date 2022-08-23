"use strict";

/**
 * solution 1 - correct but times out
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number}
 */
function score(n) {
    let maxScore = 0;

    for (let i = 0; i <= n; i++) {
        const currOR = n | i;
        maxScore = Math.max(maxScore, currOR);
    }

    return maxScore;
}

console.log( score(0) ); // 0
console.log( score(1) ); // 1
console.log( score(49) ); // 63
console.log( score(1000000) ); // 1048575
