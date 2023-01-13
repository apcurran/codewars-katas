"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(1)
 * 
 * @param {string} sortBy 
 * @param {object[]} list 
 * @returns 
 */
function sortList(sortBy, list) {
    return list.sort((objectA, objectB) => {
        return objectB[sortBy] - objectA[sortBy];
    });
}

console.log(sortList(
    "a",
    [
        { "a": 1, "b": 3 },
        { "a": 3, "b": 2 },
        { "a": 2, "b": 40 },
        { "a": 4, "b": 12 }
    ]
));
// [
//     { "a": 4, "b": 12 },
//     { "a": 3, "b": 2 },
//     { "a": 2, "b": 40 },
//     { "a": 1, "b": 3 }
// ]
