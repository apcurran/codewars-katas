"use strict";

// /**
//  * solution 1 -- map method
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} garden
//  * @returns {string}
//  */
// function rakeGarden(garden) {
//     return garden
//         .split(" ")
//         .map((word) => {
//             if (word === "rock") return word;

//             return "gravel";
//         })
//         .join(" ");
// }

/**
 * solution 2 -- string.replace() method
 * time: O(n)
 * space: O(n)
 *
 * @param {string} garden
 * @returns {string}
 */
function rakeGarden(garden) {
    return garden.replace(/\w+/g, (word) => {
        if (word === "rock") return word;

        return "gravel";
    });
}

console.log(rakeGarden("slug spider rock gravel gravel gravel gravel gravel gravel gravel")); // gravel gravel rock gravel gravel gravel gravel gravel gravel gravel
