"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- if result object is counted
 *
 * @param {object} dict
 * @returns {object}
 */
function switchDict(dict) {
    let result = {};

    for (let prop in dict) {
        const value = dict[prop];

        if (!Object.hasOwn(result, value)) {
            result[value] = [];
        }

        result[value].push(prop);
    }

    return result;
}

console.log(
    switchDict({ Ice: "Cream", Age: "21", Light: "Cream", Double: "Cream" }),
);
// {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}
