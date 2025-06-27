"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} start 
 * @param {number} count 
 * @returns {any[]}
 */
Array.range = function (start, count) {
    const end = start + count;
    let result = [];

    for (let i = start; i < end; i++) {
        result.push(i);
    }

    return result;
};

console.log( Array.range(1, 3) ); // [1, 2, 3]
console.log( Array.range(-3, 5) ); // [-3,-2,-1,0,1]

/**
 * time: O(n)
 * space: O(1)
 * 
 * @returns {number}
 */
Array.prototype.sum = function () {
    return this.reduce((sum, current) => sum + current, 0);
};

const myArr = [1, 2, 3, 4];
console.log( myArr.sum() ); // 10

