"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {object} obj 
//  * @returns {number}
//  */
// function strCount(obj) {
//     let stringsCount = 0;

//     /**
//      * @param {object} obj 
//      * @returns {void}
//      */
//     function recurse(obj) {
//         for (let key in obj) {
//             if (typeof obj[key] === "object" && obj[key] !== null) {
//                 recurse(obj[key]);
//             } else {
//                 if (typeof obj[key] === "string") {
//                     stringsCount++;
//                 }
//             }
//         }
//     }

//     recurse(obj);

//     return stringsCount;
// }

/**
 * solution 2 -- remove helper func
 * time: O(n)
 * space: O(n)
 * 
 * @param {object} obj 
 * @returns {number}
 */
function strCount(obj) {
    let stringsCount = 0;

    for (let key in obj) {
        if (typeof obj[key] === "string") {
            stringsCount++;
        } else if (typeof obj[key] === "object") {
            const containedStringsAmount = strCount(obj[key]);
            stringsCount += containedStringsAmount;
        }
    }

    return stringsCount;
}

console.log(strCount(
    {
        first: "1",
        second: "2",
        third: false,
        fourth: ["anytime", 2, 3, 4],
        fifth: null,
    },
));
