"use strict";

/**
 * solution 1 -- hashset
 * n = name length
 * time: O(n)
 * space: O(n)
 *
 * @param {string[]} name
 * @param {number[]} age
 * @param {number[]} height
 * @returns {number}
 */
function countDuplicates(name, age, height) {
    let uniquePeople = new Set();

    for (let i = 0; i < name.length; i++) {
        const person = `${name[i]}${age[i]}${height[i]}`;
        uniquePeople.add(person);
    }

    return name.length - uniquePeople.size;
}

const myNames = ["John", "Beth", "Beth", "Beth", "Bill"];
const age = [37, 23, 23, 23, 46];
const height = [183, 170, 170, 170, 175];
console.log(countDuplicates(myNames, age, height)); // 2
