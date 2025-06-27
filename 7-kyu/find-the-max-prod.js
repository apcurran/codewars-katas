"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {number} max product
 */
function findMaxProduct(arr) {
    let maxProd = -Infinity;
    // iterate arr
    for (let i = 0; i < arr.length; i++) {
        let localProd = 1;

        // iterate arr (nested loop)
        // add outer index to loop incrementer
        for (let j = i; j < arr.length; j += i + 1) {
            // get total prod
            localProd *= arr[j];
        }

        // revise max prod
        maxProd = Math.max(maxProd, localProd);
    }
    // return max val
    return maxProd;
}

console.log(findMaxProduct([11, 6, -2, 0, 5, -4, 2])); // 8
console.log(findMaxProduct([4, 0, -19])); // 0
console.log(findMaxProduct([8, -6, 4, 0, 4, 0, -5, 0])); // 4
console.log(findMaxProduct([-4, -4, -4])); // -4
