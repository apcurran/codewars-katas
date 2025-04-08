"use strict";

/**
 * solution 1 -- recursion
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function obtainMaxNumber(arr) {
    arr.sort(function sortAsc(a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length - 1; i++) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1];

        if (currentNum === nextNum) {
            const sum = currentNum + nextNum;
            arr.splice(i, 2, sum);

            return obtainMaxNumber(arr);
        }
    }

    return Math.max(...arr);
}

console.log(obtainMaxNumber([2, 4, 8, 1, 1, 15])); // 16
console.log(obtainMaxNumber([2, 2, 4, 8, 1, 1, 15])); // 16
console.log(obtainMaxNumber([2, 4, 8, 1, 1, 15, 15, 7, 7, 7, 7, 7, 7, 7])); // 30
