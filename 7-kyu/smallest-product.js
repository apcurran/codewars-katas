"use strict";

/**
 * Given a non-empty array of non-empty integer arrays,
 * multiply the contents of each nested array
 * and return the smallest total.
 *
 * @param {array} arr - array of tuple arrays
 * @returns {number} num
 */
function smallestProduct(arr) {
    const products = arr.map((nestedArr) => {
        let product = 1;

        for (let num of nestedArr) {
            product *= num;
        }

        return product;
    });

    return Math.min(...products);
}

console.log(
    smallestProduct([
        [3, 2],
        [1, 2, 1],
        [7, 8],
    ]),
); // 2
console.log(smallestProduct([[10], [3, 0], [-1, -6, 2]])); // 0
