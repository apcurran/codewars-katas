"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} num 
 * @returns {number[]}
 */
function evenAndOdd(num) {
    const digitsStr = String(num).split("");
    let evenStr = "";
    let oddStr = "";

    for (let digitStr of digitsStr) {
        if (Number(digitStr) % 2 === 0) {
            evenStr += digitStr;
        } else {
            oddStr += digitStr;
        }
    }

    return [Number(evenStr), Number(oddStr)];
}

console.log( evenAndOdd(126453) ); // [264, 153]
console.log( evenAndOdd(4628) ); // [4628, 0]
