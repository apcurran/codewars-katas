"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {"sludge"|"water"|"slime"|"air"}
 */
function bucketOf(str) {
    const isWaterBucket = /water|wet|wash/gi.test(str);
    const isSlimeBucket = /slime|I don't know/gi.test(str);

    if (isWaterBucket && isSlimeBucket) {
        return "sludge";
    } else if (isWaterBucket) {
        return "water";
    } else if (isSlimeBucket) {
        return "slime";
    } else {
        return "air";
    }
}

console.log(bucketOf("What is that, WATER?!?")); // "water"
console.log(bucketOf("I don't know if I'm doing this right.")); // "slime"
console.log(bucketOf("You won't get me!")); // "air"
