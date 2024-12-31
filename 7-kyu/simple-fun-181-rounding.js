"use strict";

/**
 * solution 1
 * time: O(d) -- stringify division value
 * space: O(d) -- stringify division value
 * 
 * @param {number} n 
 * @param {number} m 
 * @returns {number}
 */
function rounding(n, m) {
    const division = n / m;

    if (getAfterDecimalPortion(division) === "5") {
        return n;
    }

    const roundedDivision = Math.round(division);
    const result = m * roundedDivision;

    return result;
}

/**
 * @param {number} num 
 * @returns {string}
 */
function getAfterDecimalPortion(num) {
    return String(num).split(".")[1];
}

console.log(rounding(20, 3)); // 21
console.log(rounding(19, 3)); // 18
console.log(rounding(50, 100)); // 50 
console.log(rounding(472, 16)); // 472 
