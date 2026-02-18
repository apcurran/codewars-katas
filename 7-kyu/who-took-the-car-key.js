/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 *
 * @param {string[]} message - binary bits strings
 * @returns {string}
 */
function whoTookTheCarKey(message) {
    let result = "";

    for (let binStr of message) {
        const charCode = parseInt(binStr, 2);
        const char = String.fromCharCode(charCode);
        result += char;
    }

    return result;
}

console.log(
    whoTookTheCarKey([
        "01000001",
        "01101100",
        "01100101",
        "01111000",
        "01100001",
        "01101110",
        "01100100",
        "01100101",
        "01110010",
    ]),
); // "Alexander"
