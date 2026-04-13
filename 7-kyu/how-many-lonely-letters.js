/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 *
 * @param {string} text
 * @returns {number}
 */
function countLonelyLetters(text) {
    const loweredText = text.toLowerCase();
    let charCounts = new Map();

    for (let char of loweredText) {
        // skip non-lowercased chars
        if (char < "a" || char > "z") {
            continue;
        }

        const previousCharCount = charCounts.get(char) || 0;
        charCounts.set(char, previousCharCount + 1);
    }

    let lonelyLettersCount = 0;

    for (let [char, count] of charCounts) {
        // letter must appear 1 time
        if (count !== 1) {
            continue;
        }

        const charCode = char.charCodeAt(0);
        // handle a and z letters gracefully
        const prevNeighborCharCode = charCode === 97 ? -Infinity : charCode - 1;
        const prevNeighborChar = String.fromCharCode(prevNeighborCharCode);
        const nextNeighborCharCode = charCode === 122 ? Infinity : charCode + 1;
        const nextNeighborChar = String.fromCharCode(nextNeighborCharCode);

        // neighbors must BOTH be absent
        if (!charCounts.has(prevNeighborChar) && !charCounts.has(nextNeighborChar)) {
            lonelyLettersCount++;
        }
    }

    return lonelyLettersCount;
}

console.log(countLonelyLetters("ad")); // 2
console.log(countLonelyLetters("abc")); // 0
console.log(countLonelyLetters("A-dA")); // 1
console.log(countLonelyLetters("zz")); // 0
