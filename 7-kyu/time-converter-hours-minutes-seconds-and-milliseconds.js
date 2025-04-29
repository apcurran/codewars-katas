"use strict";

/**
 * solution 1 -- Date time methods
 * time: O(n)
 * space: O(n)
 * 
 * @param {Date} time 
 * @returns {string} "HH:MM:SS:MS"
 */
function convert(time) {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const milliseconds = time.getMilliseconds().toString().padStart(3, "0");

    return `${hours}:${minutes}:${seconds},${milliseconds}`;
}

console.log(convert(new Date(2016, 2, 8, 16, 42, 59))); // "16:42:59,000"
