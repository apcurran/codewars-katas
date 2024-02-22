"use strict";

// /**
//  * solution 1 -- dynamic programming
//  * @param {string} target 
//  * @param {string[]} strBank 
//  * @returns {number}
//  */
// function getOptionsCount(target, strBank) {
//     /**
//      * @param {string} target 
//      * @returns {number}
//     */
//     function getWays(target) {
//         if (target === "") return 1;

//         let count = 0;

//         for (let word of strBank) {
//             if (target.startsWith(word)) {
//                 const suffix = target.slice(word.length);
//                 const suffixWays = getWays(suffix);
//                 count += suffixWays;
//             }
//         }

//         return count;
//     }

//     return getWays(target);
// }

/**
 * solution 2 -- dynamic programming with hashmap
 * m = target length
 * n = strBank length
 * time: O(n^m)
 * space: O(m) -- callstack height with recursion
 * 
 * @param {string} target 
 * @param {string[]} strBank 
 * @returns {number}
 */
function getOptionsCount(target, strBank) {
    let hashMap = new Map();
    /**
     * @param {string} target 
     * @returns {number}
    */
    function getWays(target) {
        if (target === "") return 1;

        // retrieve from hashmap if available
        if (hashMap.has(target)) {
            return hashMap.get(target);
        }

        let totalWaysCount = 0;

        for (let word of strBank) {
            if (target.startsWith(word)) {
                const suffix = target.slice(word.length);
                const suffixWays = getWays(suffix);
                totalWaysCount += suffixWays;
            }
        }

        // save in hashmap
        hashMap.set(target, totalWaysCount);

        return totalWaysCount;
    }

    return getWays(target);
}

console.log(getOptionsCount("example", ["exa", "exam", "ple"])); // 1
console.log(getOptionsCount("example", ["exa", "exam", "ple", "mple"])); // 2
