"use strict";

/**
 * solution 1 -- TLE
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} numbers 
 * @returns {bigint[]}
 */
function productSansN(numbers) {
    let results = [];

    for (let i = 0; i < numbers.length; i++) {
        let product = BigInt(1);

        for (let j = 0; j < numbers.length; j++) {
            if (j === i) continue;

            // otherwise multiply all nums
            product *= BigInt(numbers[j]);
        }

        results.push(product);
    }

    return results;
}

console.log(productSansN([1, 2, 3, 4])); // [24, 12, 8, 6]
