"use strict";

/**
 * solution 1 -- map cache
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} data
 * @returns {number}
 */
function greatestDistance(data) {
    let dataCache = new Map();

    for (let i = 0; i < data.length; i++) {
        const currentValue = data[i];

        if (!dataCache.has(currentValue)) {
            // create key/val pair
            dataCache.set(currentValue, [i]);
        } else {
            // add index to val
            const indices = dataCache.get(currentValue);
            indices.push(i);
        }
    }

    let maxDistance = 0;

    for (let indices of dataCache.values()) {
        const firstIndex = indices[0];
        const lastIndex = indices[indices.length - 1];
        const indicesDistance = lastIndex - firstIndex;
        maxDistance = Math.max(maxDistance, indicesDistance);
    }

    return maxDistance;
}
//                             0  1  2  3  4  5
console.log(greatestDistance([0, 2, 1, 2, 4, 1])); // 3
