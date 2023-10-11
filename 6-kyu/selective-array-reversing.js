"use strict";

/**
 * solution 1
 * n = array length
 * m = length
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {number[]} array 
 * @param {number} length 
 */
function selReverse(array, length) {
    if (length === 0) return array;

    let reversedSections = [];

    for (let i = 0; i < array.length; i += length) {
        const reversedSection = array
                                    .slice(i, i + length)
                                    .reverse();
        reversedSections.push(reversedSection);
    }

    return reversedSections.flat();
}

console.log(selReverse([1,2,3,4,5,6], 2)); // [2,1, 4,3, 6,5]
