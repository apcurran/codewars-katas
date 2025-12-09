"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} packet
 * @returns {number}
 */
function quicksum(packet) {
    const SPACE_CHARCODE = 32;
    const UPPERCASE_CHARCODE_START = 65;
    const UPPERCASE_CHARCODE_END = 90;
    const CHARCODE_CONVERSION_AMOUNT = 64;
    let quickSumTotal = 0;

    for (let i = 0; i < packet.length; i++) {
        const char = packet[i];
        const charCode = char.charCodeAt(0);

        if (charCode === SPACE_CHARCODE) {
            continue;
        }

        if (charCode < UPPERCASE_CHARCODE_START || charCode > UPPERCASE_CHARCODE_END) {
            // invalid packet data
            return 0;
        }

        const convertedCharcode = charCode - CHARCODE_CONVERSION_AMOUNT;
        const quickSumAmountForChar = (i + 1) * convertedCharcode;
        quickSumTotal += quickSumAmountForChar;
    }

    return quickSumTotal;
}

console.log(quicksum("ACM")); // 46
console.log(quicksum("axg ")); // 0
