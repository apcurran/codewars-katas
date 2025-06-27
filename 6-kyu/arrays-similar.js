"use strict";

/**
 * solution 1 -- map cache
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {boolean}
 */
function arraysSimilar(arr1, arr2) {
    let arr1Cache = new Map();

    for (let val of arr1) {
        const previousValFrequency = arr1Cache.get(val) || 0;
        arr1Cache.set(val, previousValFrequency + 1);
    }

    let arr2Cache = new Map();

    for (let val of arr2) {
        const previousValFrequency = arr2Cache.get(val) || 0;
        arr2Cache.set(val, previousValFrequency + 1);
    }

    // iterate arr1Cache and check for all vals
    for (let [val, arr2Frequency] of arr2Cache) {
        if (!arr1Cache.has(val)) return false;

        const arr1Frequency = arr1Cache.get(val);

        if (arr2Frequency !== arr1Frequency) return false;
    }

    // iterate arr2Cache and check for all vals
    for (let [val, arr1Frequency] of arr1Cache) {
        if (!arr2Cache.has(val)) return false;

        const arr2Frequency = arr2Cache.get(val);

        if (arr1Frequency !== arr2Frequency) return false;
    }

    return true;
}

console.log(arraysSimilar([1, 2, 2, 3, 4], [2, 1, 2, 4, 3])); // true
console.log(arraysSimilar([2, 1, 2, 4, 3], [1, 2, 3, 4])); // false
console.log(arraysSimilar([1, 2, 3, 4], [1, 2, 3, "4"])); // false
