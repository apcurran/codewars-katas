/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function removeNoise(str) {
    const allNoise = /[%$&/#·@|º\\ª]/g;

    return str.replace(allNoise, "");
}

console.log(removeNoise("h%e&·%$·llo w&%or&$l·$%d")); // "hello world"
