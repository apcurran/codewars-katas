"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {object} hash 
 * @returns {array}
 */
function convertHashToArray(hash) {
    return Object.entries(hash)
        .sort((a, b) => {
            if (a[0] > b[0]) {
                return 1;
            } else if (a[0] < b[0]) {
                return -1;
            } else {
                return 0;
            }
        });
}

console.log(convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })); // [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]