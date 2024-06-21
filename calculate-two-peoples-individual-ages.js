"use strict";

/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} sum 
 * @param {number} difference 
 * @returns {[number, number]|null}
 */
function getAges(sum, difference) {
    if (sum < 0 || difference < 0) return null;

    const person1Age = (sum + difference) / 2;
    const person2Age = (sum - difference) / 2;

    if (person1Age < 0 || person2Age < 0) return null;

    return [person1Age, person2Age];
}

console.log(getAges(24, 4)); // [14, 10]
