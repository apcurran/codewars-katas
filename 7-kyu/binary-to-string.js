"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * @param {string} binary
 * @returns {string}
 */
function binaryToString(binary) {
    // filter out empty strs "" with Boolean
    const binaryChunks = binary.split("0b").filter(Boolean);
    let message = "";

    for (let chunk of binaryChunks) {
        const charCode = parseInt(chunk, 2);
        const char = String.fromCharCode(charCode);
        message += char;
    }

    return message;
}

console.log(binaryToString("0b10000110b11000010b1110100")); // "Cat"
