"use strict";

/**
 * solution 1
 * n = arr length
 * m = str length
 * time: O(n * m)
 * space: O(n + m)
 * 
 * @param {string[]} arr 
 * @returns {number[]}
 */
function solve(arr){
    let results = [];

    for (let str of arr) {
        const loweredStr = str.toLowerCase();
        let alphabetPositionsCount = 0;
        
        for (let i = 0; i < loweredStr.length; i++) {
            const char = loweredStr[i];
            const charCodeAdjusted = char.charCodeAt(0) - 97;

            if (charCodeAdjusted === i) {
                alphabetPositionsCount++;
            }
        }

        results.push(alphabetPositionsCount);
    }

    return results;
}

console.log(solve(["abode", "ABc", "xyzD"])); // [4, 3, 1]
