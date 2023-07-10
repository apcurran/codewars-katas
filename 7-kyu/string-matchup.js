"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {string[]} arrA 
 * @param {string[]} arrB 
 * @returns {number[]}
 */
function solve(arrA, arrB) {
    // count string freq of arr1 strings
    let arr1StrFrequencies = new Map();

    for (let str of arrA) {
        const previousStrCount = arr1StrFrequencies.get(str) || 0;
        arr1StrFrequencies.set(str, previousStrCount + 1);
    }

    let results = [];

    for (let strB of arrB) {
        const strBCount = arr1StrFrequencies.get(strB) || 0;
        results.push(strBCount);
    }

    return results;
}

const arr1 = ["abc", "abc", "xyz", "cde", "uvw"];
const arr2 = ["abc", "cde", "uap"];
console.log( solve(arr1, arr2) ); // [2, 1, 0]
