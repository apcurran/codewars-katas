"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string|array} seq
 * @param {function} pred
 * @returns {boolean}
 */
function someButNotAll(seq, pred) {
    const list = Array.from(seq);

    return list.some(pred) && !list.every(pred);
}

console.log(someButNotAll([4, 1], (x) => x > 3)); // true (one, but not both, has a value greater than 3)
console.log(someButNotAll([1, 1], (x) => x > 3)); // false
console.log(someButNotAll([4, 4], (x) => x > 3)); // false
