"use strict";

/**
 * solution 1 -- hashmaps
 * n = arr1 length
 * m = arr2 length
 * time: O((n * log n) + (m * log m))
 * space: O(n + m)
 *
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @returns {boolean}
 */
function balance(arr1, arr2) {
    // create a map for arr1 values frequencies
    let arr1ValuesFrequencies = new Map();

    for (let elem of arr1) {
        const previousFreqCount = arr1ValuesFrequencies.get(elem) || 0;
        arr1ValuesFrequencies.set(elem, previousFreqCount + 1);
    }
    // create a map for arr2 values frequencies
    let arr2ValuesFrequencies = new Map();

    for (let elem of arr2) {
        const previousFreqCount = arr2ValuesFrequencies.get(elem) || 0;
        arr2ValuesFrequencies.set(elem, previousFreqCount + 1);
    }
    // sort arr1 freq counts
    const sortedArr1ValuesFrequencies = [...arr1ValuesFrequencies.values()].sort(
        function sortAsc(a, b) {
            return a - b;
        },
    );
    // sort arr2 freq counts
    const sortedArr2ValuesFrequencies = [...arr2ValuesFrequencies.values()].sort(
        function sortAsc(a, b) {
            return a - b;
        },
    );
    // iterate larger arr, check for same values on each iteration
    const largestArr =
        sortedArr1ValuesFrequencies.length >= sortedArr2ValuesFrequencies.length
            ? sortedArr1ValuesFrequencies
            : sortedArr2ValuesFrequencies;

    for (let i = 0; i < largestArr.length; i++) {
        const sortedArr1ValuesFrequenciesValue = sortedArr1ValuesFrequencies[i];
        const sortedArr2ValuesFrequenciesValue = sortedArr2ValuesFrequencies[i];

        if (sortedArr1ValuesFrequenciesValue !== sortedArr2ValuesFrequenciesValue) {
            return false;
        }
    }

    return true;
}

let array1;
let array2;
((array1 = ["a", "a", "a", "a", "a", "b", "b", "b"]),
    (array2 = ["c", "c", "c", "c", "c", "d", "d", "d"]));
console.log(balance(array1, array2)); // true
