"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n * log n)
 * 
 * @param {string} strNum 
 * @returns {string}
 */
function digitSum(strNum) {
    // base case
    if (strNum.length === 1) return strNum;
    
    const digitSumTotal = strNum
                            .split("")
                            .reduce((sum, digit) => Number(sum) + Number(digit), 0)
                            .toString();
    
    // recursive case
    return digitSum(digitSumTotal);
}

console.log( digitSum("1234") ); // 1
console.log( digitSum("1011") ); // 3
