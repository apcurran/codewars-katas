"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[][]} data
 * @returns {number}
 */
function processData(data) {
    return data.reduce((product, subArr) => {
        const [num1, num2] = subArr;
        const numDiff = num1 - num2;

        return product * numDiff;
    }, 1);
}

console.log( processData([[2, 5], [3, 4], [8, 7]]) ); // 3
console.log( processData([[2, 9], [2, 4], [7, 5]]) ); // 28
