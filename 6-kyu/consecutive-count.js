// /**
//  * solution 1
//  * @param {string|number} items
//  * @param {string|number} key
//  * @returns {number} length of the longest segment of consecutive keys in given items
//  */
// function getConsectiveItems(items, key) {
//     const strItems = String(items);
//     const regex = new RegExp(`${key}+`, "g");
//     const consecutiveKeysMatches = strItems.match(regex);

//     if (!consecutiveKeysMatches) return 0;

//     const sortedMatches = consecutiveKeysMatches.sort((a, b) => {
//         return b.length - a.length;
//     });

//     return sortedMatches[0].length;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 *
 * @param {string|number} items
 * @param {string|number} key
 * @returns {number} length of the longest segment of consecutive keys in given items
 */
function getConsectiveItems(items, key) {
    const strItems = String(items);
    const regex = new RegExp(`${key}+`, "g");
    const consecutiveKeysMatches = strItems.match(regex);

    if (!consecutiveKeysMatches) return 0;

    const consecutiveKeysMatchesLengths = consecutiveKeysMatches.map(
        function getLengths(match) {
            return match.length;
        },
    );

    return Math.max(...consecutiveKeysMatchesLengths);
}

console.log(getConsectiveItems(90000, 0)); // 4
console.log(getConsectiveItems("abcdaaadse", "a")); // 3
console.log(getConsectiveItems("abcdaaadse", "z")); // 0
