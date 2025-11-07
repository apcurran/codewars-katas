/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} value
 * @returns {number}
 */
function rounders(value) {
    // tail rounding
    const strDigits = String(value).split("").map(Number);

    // start in reverse order from last str digit
    // stop at first digit (skip this to not reset to 0 digit)
    for (let i = strDigits.length - 1; i > 0; i--) {
        if (strDigits[i] >= 5) {
            // round up
            strDigits[i - 1]++;
        }

        strDigits[i] = 0;
    }

    return Number(strDigits.join(""));
}

console.log(rounders(15)); // 20
