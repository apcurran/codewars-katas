"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} str 
//  * @returns {string}
//  */
// function sortMyString(str) {
//     let strMap = new Map();

//     for (let i = 0; i < str.length; i++) {
//         const currLetter = str[i];
//         strMap.set(i, currLetter);
//     }

//     let evenStrGroup = "";
//     let oddStrGroup = "";

//     for (let [index, letter] of strMap) {
//         if (index % 2 === 0) {
//             evenStrGroup += letter;
//         } else {
//             oddStrGroup += letter;
//         }
//     }

//     return `${evenStrGroup} ${oddStrGroup}`;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function sortMyString(str) {
    const letterArr = str.split("");
    const evenGroup = letterArr
                        .filter((letter, index) => index % 2 === 0)
                        .join("");
    const oddGroup = letterArr
                        .filter((letter, index) => index % 2 !== 0)
                        .join("");

    return `${evenGroup} ${oddGroup}`;
}

console.log( sortMyString("CodeWars") ); // "CdWr oeas"
