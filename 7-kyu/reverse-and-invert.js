"use strict";

/**
 * solution 1
 * n = nums length
 * m = current num digits length
 * time: O(n * m)
 * space: O(n + m)
 * 
 * @param {any[]} nums 
 * @returns {number[]}
 */
function reverseInvert(nums) {
    let results = [];

    for (let num of nums) {
        if (!Number.isInteger(num)) continue;

        // we have an int
        const isNegativeInt = num < 0 ? true : false;
        const intAbsValue = Math.abs(num);
        const reversedDigitsNum = Number(String(intAbsValue).split("").reverse().join(""));

        if (isNegativeInt) {
            results.push(Math.abs(reversedDigitsNum));
        } else {
            results.push(-reversedDigitsNum);
        }
    }

    return results;
}

console.log(reverseInvert([1,12,"a",3.4,87,99.9,-42,50,5.6]));
// [-1,-21,-78,24,-5]
