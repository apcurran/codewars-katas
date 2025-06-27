"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} people
 * @returns {boolean}
 */
function inviteMoreWomen(people) {
    let womenCount = 0;
    let menCount = 0;

    for (let person of people) {
        if (person === -1) {
            womenCount++;
        }

        if (person === 1) {
            menCount++;
        }
    }

    return womenCount < menCount;
}

console.log(inviteMoreWomen([1, -1, 1])); // true
console.log(inviteMoreWomen([1, 1, 1])); // true
console.log(inviteMoreWomen([-1, -1, -1])); // false
console.log(inviteMoreWomen([1, -1])); // false
