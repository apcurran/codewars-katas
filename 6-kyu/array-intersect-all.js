"use strict";

/**
 * solution 1 -- iterative with flag
 * m = words in first array
 * n = total arrays
 * z = avg size of each array
 * time: O(m * n * z)
 * space: O(m) -- can only be as long as the number of words in first array
 *
 * @param  {...any} arrays
 * @returns {string[]}
 */
function intersect(...arrays) {
    if (arrays.length === 0) {
        return [];
    }

    const firstArray = arrays[0];
    let results = [];

    for (let word of firstArray) {
        let isCommon = true;

        for (let i = 1; i < arrays.length; i++) {
            // check every other array
            if (!arrays[i].includes(word)) {
                // if not -> mark it and exit
                isCommon = false;

                break;
            }
        }

        if (isCommon) {
            results.push(word);
        }
    }

    return results;
}

console.log(
    intersect(
        ["dog", "bar", "foo"],
        ["foo", "bar", "cat"],
        ["gin", "bar", "foo"],
    ),
); // ['bar', 'foo']
