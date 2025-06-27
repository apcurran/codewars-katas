"use strict";

// /**
//  * solution 1
//  * time: O(n * log n)
//  * space: O(n)
//  *
//  * @param {object[]} list
//  * @returns {string}
//  */
// function sentence(list) {
//     let words = [];
//     let listEntries = list.map((obj) => Object.entries(obj));
//     listEntries.sort((tupleA, tupleB) => {
//         return Number(tupleA[0][0]) - Number(tupleB[0][0]);
//     });

//     for (let entry of listEntries) {
//         words.push(entry[0][1]);
//     }

//     return words.join(" ");
// }

/**
 * solution 2
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {object[]} list
 * @returns {string}
 */
function sentence(list) {
    return list
        .sort((objA, objB) => {
            return Number(Object.keys(objA)[0]) - Number(Object.keys(objB)[0]);
        })
        .map((obj) => Object.values(obj)[0])
        .join(" ");
}

const list = [
    { 4: "dog" },
    { 2: "took" },
    { 3: "his" },
    { "-2": "Vatsan" },
    { 5: "for" },
    { 6: "a" },
    { 12: "spin" },
];
console.log(sentence(list)); // "Vatsan took his dog for a spin"
