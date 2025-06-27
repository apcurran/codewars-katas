"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @returns {number}
 */
function calc(nums) {
    return nums
        .map(function squareNumsGreaterThanZero(num) {
            if (num > 0) {
                return num * num;
            } else {
                return num;
            }
        })
        .map(function multiplyEveryThirdByThree(num, i) {
            if ((i + 1) % 3 === 0) {
                return num * 3;
            } else {
                return num;
            }
        })
        .map(function multiplyEveryFifthByNegOne(num, i) {
            if ((i + 1) % 5 === 0) {
                return num * -1;
            } else {
                return num;
            }
        })
        .reduce((sum, currentValue) => sum + currentValue, 0);
}

console.log(calc([-2, -1, 0, 1, 2])); // -6
console.log(calc([0, 2, 1, -6, -3, 3])); // 31
