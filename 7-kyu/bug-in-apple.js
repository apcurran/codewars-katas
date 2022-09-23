"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {string[][]} apples
 * @returns {number[]} location of "B" (bug) in the 2-D apple array
 */
function sc(apples) {
    for (let [aRowIndex, appleRow] of apples.entries()) {
        const rowBugIndex = appleRow.findIndex((elem) => elem === "B");

        if (rowBugIndex !== -1) {
            // found bug
            return [aRowIndex, rowBugIndex];
        }
    }
}

console.log( sc([
    ["A", "A", "A", "A", "A"],
    ["A", "B", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"]
]) ); // [1, 1]

console.log( sc([
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "B", "A", "A", "A"]
]) ); // [4, 1]

