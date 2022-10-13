"use strict";

/**
 * solution 1
 * n = nums arr len
 * m = individual num digits len
 * time: O(n * m)
 * space: O(n + m)
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
function convertPalindromes(nums) {
    return nums.map((num) => {
        if (isNumPalindrome(num)) {
            return 1;
        }

        return 0;
    });
}

/**
 * time: O(m)
 * space: O(m)
 * 
 * @param {number} num 
 * @returns {boolean}
 */
function isNumPalindrome(num) {
    const revvedNum = +String(num)
                        .split("")
                        .reverse()
                        .join("");

    return num === revvedNum;
}

console.log( convertPalindromes([22, 303, 76, 411, 89]) ); // [1, 1, 0, 0, 0]

