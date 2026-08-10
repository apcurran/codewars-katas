/**
 * solution 1
 * n = string length
 * m = masks length
 * x = maximum mask length
 * time: O(n + m)
 * space: O(x) -- excluding results array
 *
 * @param {string} string
 * @param {number[]} masks
 * @returns {string[]|null}
 */
function split(string, masks) {
    const maskLengthsSum = masks.reduce((sum, curr) => sum + curr, 0);

    if (maskLengthsSum !== string.length) {
        return null;
    }

    let index = 0;
    let results = [];

    for (let maskLength of masks) {
        const chunk = string.slice(index, index + maskLength);
        results.push(chunk);
        // increment index by currMask length
        index += maskLength;
    }

    return results;
}

console.log(split("1234567890", [3, 3, 4])); // ["123","456","7890"]
console.log(split("codewars", [4, 4])); // ["code","wars"]
