"use strict";

// /**
//  * solution 1 -- filter & sort
//  * n = santas list length
//  * m = children list length
//  * time: O(m * n)
//  * space: O(m)
//  *
//  * @param {string[]} santasList
//  * @param {string[]} children
//  * @returns {string[]}
//  */
// function findChildren(santasList, children) {
//     const noDuplicates = [...new Set(children)];

//     return noDuplicates
//         .filter((child) => {
//             if (santasList.includes(child)) {
//                 return true;
//             } else {
//                 return false;
//             }
//         })
//         .sort();
// }

/**
 * solution 2
 * n = santas list length
 * m = children list length
 * time: O(m^2 * n)
 * space: O(m)
 *
 * @param {string[]} santasList
 * @param {string[]} children
 * @returns {string[]}
 */
function findChildren(santasList, children) {
    let naughtyChildren = [];

    for (let child of children) {
        if (santasList.includes(child) && !naughtyChildren.includes(child)) {
            naughtyChildren.push(child);
        }
    }

    return naughtyChildren.sort();
}

console.log(
    findChildren(
        ["Jason", "Jackson", "Jordan", "Johnny"],
        ["Jason", "Jordan", "Jennifer"],
    ),
);
// ["Jason", "Jordan"]
