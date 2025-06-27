"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function adjacentElementsProduct(arr) {
    let globalMaxProd = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];
        const nextNum = arr[i + 1];

        if (!nextNum) continue;

        const prod = currNum * nextNum;
        globalMaxProd = Math.max(prod, globalMaxProd);
    }

    return globalMaxProd;
}

console.log(adjacentElementsProduct([5, 8])); // 40
console.log(adjacentElementsProduct([1, 2, 3])); // 6
console.log(adjacentElementsProduct([1, 5, 10, 9])); // 90
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); // -14
