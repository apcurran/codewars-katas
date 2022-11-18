"use strict";

/**
 * solution 1
 * time: O(n) -- str conversion
 * space: O(n) -- str conversion
 * 
 * @param {number} num 
 * @param {number} nth 
 * @returns {number}
 */
function findDigit(num, nth) {
    if (nth <= 0) return -1;

    const posNum = Math.abs(num);
    const numStr = String(posNum);
    const val = numStr[numStr.length - nth];
    
    if (val === undefined) return 0;

    return Number(val);
}

console.log( findDigit(5673, 4) ); // 5
console.log( findDigit(-2825, 3) ); // 8
console.log( findDigit(65, 0) ); // -1
