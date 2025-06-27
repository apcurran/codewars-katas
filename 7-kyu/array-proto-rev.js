"use strict";

/**
 * solution 1 -- two-pointer technique
 * time: O(n)
 * space: O(1)
 *
 * @returns {number[]}
 */
Array.prototype.reverse = function () {
    let leftPointer = 0;
    let rightPointer = this.length - 1;

    while (leftPointer < rightPointer) {
        const leftNum = this[leftPointer];
        const rightNum = this[rightPointer];

        // swap nums at left and right sides
        this[leftPointer] = rightNum;
        this[rightPointer] = leftNum;
        // move pointers
        leftPointer++;
        rightPointer--;
    }

    return this;
};

console.log([1, 2, 3, 4].reverse()); // [4,3,2,1]
