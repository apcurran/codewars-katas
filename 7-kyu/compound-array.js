"use strict";

/**
 * solution 1
 * time: O(max(n, m))
 * space: O(n + m)
 *
 * @param {number[]} arrA
 * @param {number[]} arrB
 * @returns {number[]} shuffled arrA and arrB values into a single array
 */
function compoundArray(arrA, arrB) {
    const longestArr = arrA.length >= arrB.length ? arrA : arrB;
    let combinedShuffledValues = [];

    for (let i = 0; i < longestArr.length; i++) {
        const arrAValue = arrA[i];
        const arrBValue = arrB[i];

        if (typeof arrAValue === "number") {
            combinedShuffledValues.push(arrAValue);
        }

        if (typeof arrBValue === "number") {
            combinedShuffledValues.push(arrBValue);
        }
    }

    return combinedShuffledValues;
}

console.log(compoundArray([1, 2, 3, 4, 5, 6], [9, 8, 7, 6])); // [1,9,2,8,3,7,4,6,5,6]
