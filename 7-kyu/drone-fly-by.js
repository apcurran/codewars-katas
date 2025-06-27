"use strict";

/**
 * 
 * @param {string} lamps 
 * @param {string} drone 
 * @returns {string}
 */
function flyBy(lamps, drone) {
    if (lamps.length < drone.length) {
        return "o".repeat(drone.length);
    }

    return lamps.replace("x".repeat(drone.length), "o".repeat(drone.length));
}

console.log( flyBy("xxxxxx", "====T") ); // 'ooooox'
console.log( flyBy("xxxxxxxxx", "==T") ); // 'oooxxxxxx'
