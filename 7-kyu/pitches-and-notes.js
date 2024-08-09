"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} pitch 
 * @returns {string} note
 */
function getNote(pitch) {
    const concertAStart = 440;
    const concertAEnd = 880;
    let currentPitch = pitch;

    while (currentPitch < concertAStart) {
        currentPitch *= 2;
    }

    while (currentPitch >= concertAEnd) {
        currentPitch /= 2;
    }

    return notesDictionary[currentPitch];
}
