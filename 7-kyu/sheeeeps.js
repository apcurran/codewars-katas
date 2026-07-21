// /**
//  * solution 1 -- hash map
//  * n = possibleSheep length
//  * m = word length
//  * time: O(n * m)
//  * space: O(m) -- not including results arr
//  *
//  * @param {string[]} possibleSheep
//  * @returns {string[]}
//  */
// function reloadSheeps(possibleSheep) {
//     // "sheep" hash map should contain
//     const SHEEP_CHARS = new Map([
//         ["s", 1],
//         ["h", 1],
//         ["e", 2],
//         ["p", 1],
//     ]);
//     let results = [];

//     outerWord: for (let word of possibleSheep) {
//         let wordChars = new Map();

//         for (let char of word) {
//             const previousCount = wordChars.get(char) || 0;
//             wordChars.set(char, previousCount + 1);
//         }

//         // compare size first!
//         if (SHEEP_CHARS.size !== wordChars.size) {
//             continue outerWord;
//         }

//         // iterate wordChars and compare to known SHEEP_CHARS values
//         for (let [knownSheepChar, knownSheepCharCount] of SHEEP_CHARS) {
//             const possibleSheepCharCount = wordChars.get(knownSheepChar) || 0;

//             if (knownSheepCharCount !== possibleSheepCharCount) {
//                 continue outerWord;
//             }
//         }

//         // matching "sheep" to results
//         results.push("sheep");
//     }

//     return results;
// }

/**
 * solution 2 -- sort
 * n = possibleSheep length
 * m = word length
 * time: O(n * (m * log m))
 * space: O(m) -- not including results arr
 *
 * @param {string[]} possibleSheep
 * @returns {string[]}
 */
function reloadSheeps(possibleSheep) {
    const SHEEP_SORTED = "eehps";
    let results = [];

    for (let word of possibleSheep) {
        const sortedWord = word.split("").sort().join("");

        if (SHEEP_SORTED === sortedWord) {
            results.push("sheep");
        }
    }

    return results;
}

console.log(reloadSheeps(["sheep", "sheep", "sheep"]));
// ["sheep", "sheep", "sheep"]
console.log(reloadSheeps(["pe", "hehe", "heeps", "eee", "ti", "peehs"]));
// ["sheep", "sheep"]
console.log(reloadSheeps(["p", "ph", "shep", "phe"]));
// []
