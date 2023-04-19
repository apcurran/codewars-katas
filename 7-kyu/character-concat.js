"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function charConcat(str) {
    let results = [];
    let leftPointer = 0;
    let rightPointer = str.length - 1;

    while (leftPointer < rightPointer) {
        const leftValue = str[leftPointer];
        const rightValue = str[rightPointer];
        const number = leftPointer + 1;
        results.push(leftValue, rightValue, number);
        // move pointers
        leftPointer++;
        rightPointer--;
    }

    return results.join("");
}

console.log( charConcat("abcdef") ); // 'af1be2cd3'
console.log( charConcat("abc!def") ); // 'af1be2cd3'
