"use strict";

/**
 * 
 * @param {number} a 
 * @param {number} b
 * @param {number} n
 * @returns {number}
 */
function magicalWell(a, b, n) {
    let aCopy = a;
    let bCopy = b;
    let total = 0;

    for (let i = 0; i < n; i++) {
        const currMarbleAmt = aCopy * bCopy;
        total += currMarbleAmt;
        
        aCopy++;
        bCopy++;
    }

    return total;
}

console.log(magicalWell(1, 2, 2)); // 8
console.log(magicalWell(6, 5, 3)); // 128
