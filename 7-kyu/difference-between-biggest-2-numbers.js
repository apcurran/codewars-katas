"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function diffBig2(arr) {
    let largest = 0;
    let secondLargest = 0;

    for (let num of arr) {
        if (num >= largest) {
            // update second largest value
            secondLargest = largest;
            // update largest value
            largest = num;
        } else if (num > secondLargest) {
            secondLargest = num;
        }
    }

    return largest - secondLargest;
}

console.log(diffBig2([2, 1])); // 1
console.log(diffBig2([8, 3, 1])); // 5
console.log(diffBig2([1, 8, 3])); // 5
