"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string[]} rooms
 * @returns {number|string} index of the first empty meeting room, or "None available!"
 */
function meeting(rooms) {
    const firstEmptyRoomIndex = rooms.findIndex(
        (roomStatus) => roomStatus === "O",
    );

    if (firstEmptyRoomIndex === -1) return "None available!";

    return firstEmptyRoomIndex;
}

console.log(meeting(["X", "O", "X"])); // 1
console.log(meeting(["X", "X", "X", "X", "X"])); // "None available!"
