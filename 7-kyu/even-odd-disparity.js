"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {array} arr 
 * @returns {number}
 */
function solve(arr) {
    let oddCount = 0;
    let evenCount = 0;

    for (let value of arr) {
        if (typeof value === "number") {
            if (value % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    return evenCount - oddCount;
}

console.log(solve([1, "a", 17, 8, "e", 3, "i", 12, 1])); // -2
