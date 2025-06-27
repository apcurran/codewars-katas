"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string[][]} logins
 * @returns {string[][]}
 */
function searchNames(logins) {
    return logins.filter((strArr) => {
        const login = strArr[0];
        const hasUnderscore = login[login.length - 1] === "_";

        return hasUnderscore;
    });
}

console.log(
    searchNames([
        ["foo", "foo@foo.com"],
        ["bar_", "bar@bar.com"],
    ]),
);
// [[ "bar_", "bar@bar.com" ]]
