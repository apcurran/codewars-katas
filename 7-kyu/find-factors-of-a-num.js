"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} x 
 * @returns {number[]|-1}
 */
function factors(x){
    if (typeof x !== "number" ||
        !Number.isInteger(x)  ||
        x < 1) {
        return -1;
    }

    let factorsOfNum = [];

    for (let i = x; i >= 1; i--) {
        if (x % i === 0) {
            factorsOfNum.push(i);
        }
    }

    return factorsOfNum;
}

console.log( factors(54) ); // [54, 27, 18, 9, 6, 3, 2, 1]
