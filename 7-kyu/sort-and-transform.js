"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n) sorting
 * 
 * @param {number[]} nums 
 * @returns {string}
 */
function sortTransform(nums) {
    // beforeSorting
    const part1 = getCharsChunk(nums);
    
    nums.sort(function sortAsc(a, b) {
        return a - b;
    });
    const part2 = getCharsChunk(nums);

    nums.sort(function sortDesc(a, b) {
        return b - a;
    });
    const part3 = getCharsChunk(nums);

    const convertedChars = nums.map(function convertNumsToASCII(num) {
        return String.fromCharCode(num);
    }).sort();
    const part4 = convertedChars[0] + convertedChars[1] + convertedChars.at(-2) + convertedChars.at(-1);

    return `${part1}-${part2}-${part3}-${part4}`;
}

/**
 * @param {number[]} nums 
 * @returns {string} ASCII chunk
 */
function getCharsChunk(nums) {
    return String.fromCharCode(nums[0]) + String.fromCharCode(nums[1]) + String.fromCharCode(nums.at(-2)) + String.fromCharCode(nums.at(-1));    
}

console.log(sortTransform([111, 112, 113, 114, 115, 113, 114, 110])); // "oprn-nors-sron-nors"
