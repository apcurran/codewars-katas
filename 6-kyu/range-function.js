"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1) -- not including results array
 *
 * @param  {...number} rest
 * @returns {number[]}
 */
function range(...rest) {
    let start = 1;
    let step = 1;
    let stop = 1;
    let results = [];

    if (rest.length === 0) {
        return results;
    } else if (rest.length === 1) {
        start = 1;
        stop = rest[0];
    } else if (rest.length === 2) {
        start = rest[0];
        stop = rest[1];
    } else if (rest.length === 3) {
        start = rest[0];
        step = rest[1];
        stop = rest[2];
    }

    for (let i = start; i <= stop; i += step) {
        results.push(i);
    }

    return results;
}

console.log(range(5)); // [1, 2, 3, 4, 5]
console.log(range(3, 7)); // [3, 4, 5, 6, 7]);
console.log(range(2, 3, 15)); // [2, 5, 8, 11, 14]);
console.log(range(1, 1)); // [1]
console.log(range(1, 1, 1)); // [1]
console.log(range(2, 1)); // []
