"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} distance
 * @param {number} boatSpeed
 * @param {string} stream
 * @returns {number}
 */
function time(distance, boatSpeed, stream) {
    // split str to get stream dir and stream speed
    const [streamDir, streamSpeedStr] = stream.split(" ");
    const streamSpeedNum = Number(streamSpeedStr);
    // either add or sub stream speed to boat speed depending on going with downstream or against (upstream)
    const totalSpeed =
        streamDir === "Downstream" ? boatSpeed + streamSpeedNum : boatSpeed - streamSpeedNum;
    // divide total dist by prev val
    const resTime = distance / totalSpeed;

    return Number.isInteger(resTime) ? resTime : roundNumTwoDecPlaces(resTime);
}

/**
 * @param {number} num
 * @returns {number}
 */
function roundNumTwoDecPlaces(num) {
    return Math.round(num * 100) / 100;
}

console.log(time(24, 10, "Downstream 2")); // 2
console.log(time(24, 14, "Upstream 2")); // 2
console.log(time(54, 28, "Downstream 3")); // 1.74
console.log(time(34, 80, "Upstream 0")); // 0.43
