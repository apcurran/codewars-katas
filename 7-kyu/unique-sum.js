"use strict";


/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} list 
 * @returns {number|null}
 */
function uniqueSum(list) {
    if (list.length === 0) return null;

    const uniqueNums = new Set(list);
    let sum = 0;

    for (let num of uniqueNums) {
        sum += num;
    }

    return sum;
}

console.log( uniqueSum([1, 3, 8, 1, 8]) ); // 12
console.log( uniqueSum([-1, -1, 5, 2, -7]) ); // -1
