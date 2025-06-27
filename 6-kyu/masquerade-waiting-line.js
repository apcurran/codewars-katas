"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string[]} masks
 * @returns {number}
 */
function friendFind(masks) {
    let possibleFriendCount = 0;

    for (let i = 0; i < masks.length; i++) {
        const currentMask = masks[i];

        // possible friend located
        if (currentMask === "red") {
            // check for two blue masked friends nearby
            if (
                (masks[i - 1] === "blue" && masks[i - 2] === "blue") ||
                (masks[i - 1] === "blue" && masks[i + 1] === "blue") ||
                (masks[i + 1] === "blue" && masks[i + 2] === "blue")
            ) {
                possibleFriendCount++;
            }
        }
    }

    return possibleFriendCount;
}

console.log(friendFind(["blue", "blue", "red", "red", "blue", "green"])); // 1
console.log(friendFind(["blue", "red", "blue", "blue", "red", "blue", "red"])); // 2
console.log(friendFind(["brown", "brown", "red", "green"])); // 0
