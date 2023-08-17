"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} index 
 * @returns {number[]}
 */
Array.prototype.remove = function (index) {
    const arr = this;

    if (typeof index !== "number") return arr;

    if (index < 0 || index > arr.length - 1) return arr;

    arr.splice(index, 1);

    return arr;
};

let myArr = [1,2,3];
console.log(myArr.remove(1)); // [1,3]
