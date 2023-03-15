"use strict";

/**
 * solution 1
 * time: O(n + m)
 * space: O(n + m)
 * 
 * @param {object} obj 
 * @returns {string}
 */
function toQueryString(obj) {
    let strs = [];

    for (let key in obj) {
        const value = obj[key];

        if (Array.isArray(value)) {
            for (let innerVal of value) {
                // add each value to strsArr
                strs.push(`${key}=${innerVal}`);
            }

            continue;
        }

        // otherwise, add value to strsArr
        strs.push(`${key}=${value}`);
    }

    return strs.join("&");
}

console.log( toQueryString({
    "username": "warrior",
    "kyu": 1,
    "age": 28
}) ); // username=warrior&kyu=1&age=28

console.log( toQueryString({
    "name": "shirt",
    "colors": [ "white", "black" ]
}) ); // name=shirt&colors=white&colors=black
