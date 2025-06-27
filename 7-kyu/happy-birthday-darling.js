"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {string}
 */
function womensAge(n) {
    const convertedAgeBase = Math.floor(n / 2);
    const convertedAge = n % 2 === 1 ? 21 : 20;

    return `${n}? That's just ${convertedAge}, in base ${convertedAgeBase}!`;
}

console.log(womensAge(32)); // "32? That's just 20, in base 16!"
console.log(womensAge(39)); // "39? That's just 21, in base 19!"
console.log(womensAge(22)); // "22? That's just 20, in base 11!"
console.log(womensAge(65)); // "65? That's just 21, in base 32!"
console.log(womensAge(83)); // "83? That's just 21, in base 41!"
