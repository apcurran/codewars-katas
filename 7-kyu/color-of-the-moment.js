"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} hexCode 
 * @returns {string} "hh:mm:ss"
 */
function hexToTime(hexCode) {
    const HEX_BASE = 16;
    const hours = parseInt(hexCode.slice(1, 3), HEX_BASE);
    const minutes = parseInt(hexCode.slice(3, 5), HEX_BASE);
    const seconds = parseInt(hexCode.slice(5, 7), HEX_BASE);
    
    if (hours > 23 || minutes > 59 || seconds > 59) {
        throw new Error("Incorrect time provided");
    }

    const paddedHours = String(hours).padStart(2, "0");
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

console.log(hexToTime("#0d3737")); // "13:55:55"
