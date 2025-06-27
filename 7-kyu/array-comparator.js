"use strict";

/**
 * solution 1 -- hashset
 * n = arr1 length
 * m = arr2 length
 * time: O(n + m)
 * space: O(n)
 *
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {number}
 */
function matchArrays(arr1, arr2) {
    const arr1Values = new Set(arr1);
    let sharedElementsCount = 0;

    for (let elem of arr2) {
        if (arr1Values.has(elem)) {
            sharedElementsCount++;
        }
    }

    return sharedElementsCount;
}

console.log(
    matchArrays(
        ["incapsulation", "OOP", "array"],
        ["time", "propert", "paralelism", "OOP"],
    ),
); // 1
