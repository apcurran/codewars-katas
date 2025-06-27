"use strict";

/**
 * solution 1
 * time: O(n * log n + m)
 * space: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function solve(arr) {
    // count num and frequency in Map obj
    let numberFrequencies = new Map();

    for (let num of arr) {
        const previousFrequency = numberFrequencies.get(num) || 0;
        numberFrequencies.set(num, previousFrequency + 1);
    }

    // sort Map obj by frequency
    const sortedNumberFrequencies = new Map(
        [...numberFrequencies.entries()].sort((a, b) => {
            const numAFrequency = a[1];
            const numBFrequency = b[1];

            if (numAFrequency === numBFrequency) {
                const numA = a[0];
                const numB = b[0];

                // if elem frequency is the same, sort nums ASC
                return numA - numB;
            }

            return numBFrequency - numAFrequency;
        }),
    );
    // iterate sorted Map and make a new array with items by most frequent elem
    let mostFrequentNumbersSorted = [];

    for (let [num, frequency] of sortedNumberFrequencies) {
        // iterate frequency to add to results array
        for (let i = 0; i < frequency; i++) {
            mostFrequentNumbersSorted.push(num);
        }
    }

    return mostFrequentNumbersSorted;
}

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7])); // [3,3,3,5,5,7,7,2,9]
