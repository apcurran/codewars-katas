"use strict";

/**
 * solution 1
 * n = total lists length
 * m = list
 * x = total elements between all lists
 * time: O(max(m) * n)
 * space: O(x)
 *
 * @param  {...Array} lists
 * @returns {Array}
 */
function combine(...lists) {
    const longestArrayLength = Math.max(...lists.map((list) => list.length));
    let result = [];

    for (let i = 0; i < longestArrayLength; i++) {
        for (let list of lists) {
            const curr = list[i];

            if (curr) {
                result.push(curr);
            }
        }
    }

    return result;
}

console.log(combine(["a", "b", "c"], [1, 2, 3, 4, 5])); // ['a', 1, 'b', 2, 'c', 3, 4, 5]
