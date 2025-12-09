"use strict";

/**
 * Solution 1
 * Time: O(n^3)
 *
 * Given two arrays of strings a1 and a2
 * return a sorted array r in lexicographical order of the strings of
 * a1 which are substrings of strings of a2.
 * @param {string[]} array1
 * @param {string[]} array2
 * @returns {string[]}
 */
// function inArray(array1, array2) {
//     // Create map of strs, setting initial vals to false.
//     const myA1Map = createA1Map(array1);

//     // Iterate through arr2 checking if str in arr contains any str from map.
//     for (let str of array2) {
//         for (let key of myA1Map.keys()) {
//             if (str.includes(key)) {
//                 // Set str map val to true if str occurs in arr2.
//                 myA1Map.set(key, true);
//             }
//         }
//     }

//     let resArr = [];

//     for (let [key, val] of myA1Map) {
//         if (val === true) {
//             resArr.push(key);
//         }
//     }

//     // Sort arr of strs for result
//     return resArr.sort();
// }

// function createA1Map(arr) {
//     const strMap = new Map();

//     for (let str of arr) {
//         strMap.set(str, false);
//     }

//     return strMap;
// }

// Solution 2
// Time: O(n^3)
// function inArray(array1, array2) {
//     let resArr = [];

//     for (let arr2Str of array2) {
//         for (let arr1Str of array1) {
//             if (arr2Str.includes(arr1Str)) {
//                 resArr.push(arr1Str);
//             }
//         }
//     }

//     // Return sorted arr without duplicates
//     return [...new Set(resArr)].sort();
// }

// Time: O(n^2)
function inArray(array1, array2) {
    const resArr = array1.filter((str) => {
        return array2.join(" ").includes(str);
    });

    return resArr.sort();
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])); // ["arp", "live", "strong"]
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"])); // []
