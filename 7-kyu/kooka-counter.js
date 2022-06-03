"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} laughing 
 * @returns {number}
 */
function kookaCounter(laughing) {
    if (laughing === "") return 0;

    return laughing
            .match(/(ha)+|(Ha)+/g)
            .length;
}

console.log( kookaCounter("") ); // 0
console.log( kookaCounter("hahahahaha") ); // 1
console.log( kookaCounter("hahahahahaHaHaHa") ); // 2
console.log( kookaCounter("HaHaHahahaHaHa") ); // 3
