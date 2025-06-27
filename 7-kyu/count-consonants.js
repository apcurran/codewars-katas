"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {number}
 */
function consonantCount(str) {
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];

    return consonants.length;
}

console.log(consonantCount("XaeiouX")); // 2
console.log(consonantCount("")); // 0
console.log(consonantCount("helLo world")); // 7
console.log(
    consonantCount(
        "iiuoiouiuieauoeeesybknhlsrfyrbvhghbdjkxmybmsnqxvdvzvxxcqffzpfvztctfgbxbhqlftrcscrlddywcbhhbmzrtjyywsnrzybyz",
    ),
); // 90
