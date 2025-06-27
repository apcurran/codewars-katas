"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[]} numbers
 * @returns {number[]}
 */
function productArray(numbers) {
    // map over arr
    return numbers.map((num, numIndex) => {
        // for each elem in arr,
        // get total product besides curr elem (index)
        let prod = 1;

        for (let i = 0; i < numbers.length; i++) {
            if (i === numIndex) continue;

            const curr = numbers[i];
            prod *= curr;
        }

        // return total product
        return prod;
    });
}

console.log(productArray([12, 20])); // [20,12]
console.log(productArray([3, 27, 4, 2])); // [216,24,162,324]
console.log(productArray([13, 10, 5, 2, 9])); // [900,1170,2340,5850,1300]
