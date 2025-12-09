"use strict";

/**
 *
 * @param {number[]} arr
 * @param {number} n
 * @returns {string}
 */
function sumOrProduct(arr, n) {
    const sortedArr = arr.sort((a, b) => a - b);
    const largestNumsSum = sortedArr.slice(-n).reduce((total, currNum) => total + currNum, 0);
    const smallestNumsProduct = sortedArr
        .slice(0, n)
        .reduce((product, currNum) => product * currNum, 1);

    if (largestNumsSum > smallestNumsProduct) {
        return "sum";
    } else if (smallestNumsProduct > largestNumsSum) {
        return "product";
    } else {
        return "same";
    }
}

console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)); // => "product"
