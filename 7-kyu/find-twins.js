"use strict";

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number|null}
 */
function elimination(arr) {
    let seenNums = new Set();

    for (let num of arr) {
        if (seenNums.has(num)) return num;

        seenNums.add(num);
    }

    return null;
}

console.log(elimination([2, 3, 6, 34, 7, 8, 2])); // 2
console.log(elimination([2, 5, 34, 1, 22])); // null
