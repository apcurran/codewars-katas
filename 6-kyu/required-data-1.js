"use strict";

/**
 * solution 1
 * time: O(n * log n) -- due to sorting at the end
 * space: O(n)
 * 
 * @param {number[]} list 
 * @returns {array}
 */
function countSel(list) {
    let valsCache = new Map();

    // iterate list
    for (let val of list) {
        // cache vals and frequencies
        const previousFrequency = valsCache.get(val) || 0;
        valsCache.set(val, previousFrequency + 1);
    }

    // 1. get list length 
    const totalInts = list.length;
    // 2. get map.keys() length
    const totalUniqueVals = [...valsCache.keys()].length;
    let valsWithFrequency1Counter = 0;
    let maxFrequencies = [];
    let maxValOccurrence = 0;
    
    for (let [, frequency] of valsCache) {
        // 3. get vals that have a frequency of 1
        if (frequency === 1) valsWithFrequency1Counter++;
        // 5. get max frequency
        maxValOccurrence = Math.max(maxValOccurrence, frequency);
    }

    // 4. the vals that have the max frequencies (sort ascending order)
    for (let [val, frequency] of valsCache) {
        if (frequency === maxValOccurrence) maxFrequencies.push(val);
    }

    // sort ASC
    maxFrequencies.sort((a, b) => a - b);
    //           1.           2.                     3.            4.                       5.
    return [totalInts, totalUniqueVals, valsWithFrequency1Counter, [maxFrequencies, maxValOccurrence]];
}

console.log( countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]) ); // [10, 7, 5, [[-5], 3]]