"use strict";

/**
 * solution 1
 * time: O(n^2) -- array.unshift() within loop
 * space: O(n)
 * 
 * @param {number[]} data 
 * @returns {number[]}
 */
function mirror(data) {
    if (data.length === 0) return [];

    const sortedData = data
        .slice()
        .sort(function sortDesc(a, b) {
            return b - a;
        });
    const middleValue = sortedData[0];
    let results = [middleValue];

    for (let i = 1; i < sortedData.length; i++) {
        const value = sortedData[i];
        results.push(value);
        results.unshift(value);
    }

    return results;
}

console.log(mirror([-8, 42, 18, 0, -16])); // [-16, -8, 0, 18, 42, 18, 0, -8, -16]
