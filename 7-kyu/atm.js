"use strict";

/**
 * solution 1 -- iterative
 * 
 * @param {number} n 
 * @returns {number}
 */
function solve(n) {
    // edge case, impossible to solve
    if (n % 10 !== 0) return -1;

    let notesCount = 0;
    let nCopy = n;

    while (nCopy) {
        if (nCopy % 500 < nCopy) {
            // divisible by 500
            nCopy -= 500;
            notesCount++;
        } else if (nCopy % 200 < nCopy) {
            nCopy -= 200;
            notesCount++;
        } else if (nCopy % 100 < nCopy) {
            nCopy -= 100;
            notesCount++;
        } else if (nCopy % 50 < nCopy) {
            nCopy -= 50;
            notesCount++;
        } else if (nCopy % 20 < nCopy) {
            nCopy -= 20;
            notesCount++;
        }
    }

    return notesCount;
}

console.log( solve(770) ); // 4
console.log( solve(550) ); // 2
