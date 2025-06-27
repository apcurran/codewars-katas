"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {[string, string]}
 */
function bald(str) {
    let cleanHead = "";
    let hairsCount = 0;

    for (let char of str) {
        if (char === "/") {
            hairsCount++;
        }

        cleanHead += "-";
    }

    if (hairsCount === 0) {
        return [cleanHead, "Clean!"];
    } else if (hairsCount === 1) {
        return [cleanHead, "Unicorn!"];
    } else if (hairsCount === 2) {
        return [cleanHead, "Homer!"];
    } else if (hairsCount >= 3 && hairsCount <= 5) {
        return [cleanHead, "Careless!"];
    } else if (hairsCount > 5) {
        return [cleanHead, "Hobo!"];
    }
}

console.log(bald("/---------")); // ['----------', 'Unicorn!']
console.log(bald("/-----/-")); // ['--------', 'Homer!']
console.log(bald("--/--/---/-/---")); // ['---------------', 'Careless!']
