/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {number[]} lengths of substrings
 */
function splitString(str) {
    let charsLastIndex = new Map();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charsLastIndex.set(char, i);
    }

    let results = [];
    let charFarthestIndex = 0;
    let currentSubstringStart = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const charFinalIndex = charsLastIndex.get(char);
        charFarthestIndex = Math.max(charFarthestIndex, charFinalIndex);

        if (i === charFarthestIndex) {
            // make a cut for the substr
            const substrLength = i - currentSubstringStart + 1;
            results.push(substrLength);
            currentSubstringStart = i + 1;
        }
    }

    return results;
}

console.log(splitString("abbacdceef")); // [4, 3, 2, 1]
