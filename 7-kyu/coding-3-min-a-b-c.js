"use strict";

/**
 * solution 1 -- iterative
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[]} numbers
 * @param {number} c
 * @returns {[number, number]|null}
 */
function findAB(numbers, c) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const a = numbers[i];
            const b = numbers[j];

            if (a * b === c) {
                return [a, b];
            }
        }
    }

    return null;
}

console.log(findAB([1, 2, 3], 3)); // [1,3]
console.log(findAB([1, 2, 3], 6)); // [2,3]
console.log(findAB([1, 2, 3], 7)); // null
