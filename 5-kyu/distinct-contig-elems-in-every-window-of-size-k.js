"use strict";

/**
 * solution 1 -- iterative (correct, but TLE)
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number} k 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function countContiguousDistinct(k, arr) {
    // set left pointer at 0
    let leftPointer = 0;
    // set right pointer to leftPointer + k
    let rightPointer = leftPointer + k;
    let windowSet = new Set();
    let resArr = [];
    // repeat while condition is true -> leftPointer + k < arr len
    while (rightPointer <= arr.length) {
        // iterate window and add elems to set
        for (let i = leftPointer; i < rightPointer; i++) {
            windowSet.add(arr[i]);
        }
        // count set's len
        // add set len to resArr
        resArr.push(windowSet.size);
        // clear windowSet
        windowSet.clear();

        // move pointers
        leftPointer++;
        rightPointer = leftPointer + k;
    }

    return resArr;
}

console.log(countContiguousDistinct(4, [1, 2, 1, 3, 4, 2, 3])); // [3, 4, 4, 3]
console.log(countContiguousDistinct(2, [1, 2, 1, 3, 4, 2, 3, 3])); // [2, 2, 2, 2, 2, 2, 1]
console.log(countContiguousDistinct(8, [1, 2, 1, 3, 4, 2, 3, 3])); // [4]

