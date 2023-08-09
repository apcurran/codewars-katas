"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {string} s1 
//  * @param {string} s2 
//  * @returns {boolean}
//  */
// function isOpposite(s1, s2) {
//     if (s1.length !== s2.length) return false;

//     if (s1 === "" && s2 === "") return false;

//     let s1Pointer = 0;
//     let s2Pointer = 0;

//     while (s1Pointer !== s1.length) {
//         const s1Char = s1[s1Pointer];
//         const s2Char = s2[s2Pointer];

//         if (s1Char === s2Char) return false;

//         if (s1Char.toUpperCase() !== s2Char.toUpperCase()) return false;

//         s1Pointer++;
//         s2Pointer++;
//     }

//     return true;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s1 
 * @param {string} s2 
 * @returns {boolean}
 */
function isOpposite(s1, s2) {
    if (s1 === s2) return false;

    if (s1.toLowerCase() !== s2.toLowerCase()) return false;

    for (let i = 0; i < s1.length; i++) {
        const s1Char = s1[i];
        const s2Char = s2[i];

        if (s1Char === s2Char) return false;
    }

    return true;
}

console.log(isOpposite("ab","AB")); // true
console.log(isOpposite("aB","Ab")); // true
console.log(isOpposite("aBcd","AbCD")); // true
console.log(isOpposite("AB","Ab")); // false
console.log(isOpposite("","")); // false
