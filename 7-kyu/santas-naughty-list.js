"use strict";

/**
 * solution 1 -- filter & sort
 * n = santas list length
 * m = children list length
 * time: O(m * n)
 * space: O(m)
 * 
 * @param {string[]} santasList 
 * @param {string[]} children 
 * @returns {string[]}
 */
function findChildren(santasList, children) {
    const noDuplicates = [...new Set(children)];

    return noDuplicates
        .filter((child) => {
            if (santasList.includes(child)) {
                return true;
            } else {
                return false;
            }
        })
        .sort();
}

console.log(findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"]));
// ["Jason", "Jordan"]

