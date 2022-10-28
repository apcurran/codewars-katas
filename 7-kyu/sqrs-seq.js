"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} x 
 * @param {number} n 
 * @returns {number[]}
 */
function squares(x, n) {
    if (n <= 0) return [];

    let resArr = [];
    let prevNum = x;

    for (let i = 0; i < n; i++) {
        resArr.push(prevNum);
        // update prevNum to curr sq
        prevNum = prevNum ** 2;
    }

    return resArr;
}

console.log( squares(2, 5) ); // [2, 4, 16, 256, 65536]
console.log( squares(3, 3) ); // [3, 9, 81]
