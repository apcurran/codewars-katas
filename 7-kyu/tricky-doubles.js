"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} num 
 * @returns {number}
 */
function trickyDoubles(num) {
    if (isTrickyDoubleNum(num)) {
        return num;
    } else {
        return num * 2;
    }
}

/**
 * @param {number} num 
 * @returns {boolean}
 */
function isTrickyDoubleNum(num) {
    const strNum = String(num);
    
    if (strNum.length % 2 === 1) {
        // odd can never be a ticky double
        return false;
    }

    const firstHalf = strNum.slice(0, strNum.length / 2);
    const secondHalf = strNum.slice(strNum.length / 2);

    return firstHalf === secondHalf;
}

console.log(isTrickyDoubleNum(8787));
console.log(isTrickyDoubleNum(878));
