/**
 * solution 1 -- sliding window
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {number}
 */
function longestSubstringOf(str) {
    let leftPointer = 0;
    let rightPointer = 0;
    let validWindow = new Set();
    let longestLength = 0;

    while (rightPointer < str.length) {
        const currentChar = str[rightPointer];

        while (validWindow.has(currentChar)) {
            // If that makes the window invalid, shrink from the left until it's valid again.
            const leftChar = str[leftPointer];
            validWindow.delete(leftChar);
            leftPointer++;
        }

        // now add right char to window
        validWindow.add(currentChar);
        rightPointer++;

        // the window is valid
        longestLength = Math.max(longestLength, validWindow.size);
    }

    return longestLength;
}

console.log(longestSubstringOf("hchzvfrkmlnozjk")); // "chzvfrkmlno"
console.log(longestSubstringOf("baacab")); // "cab"
console.log(longestSubstringOf("abcd")); // "abcd"
console.log(longestSubstringOf("!@#$%^&^%$#@!")); // "!@#$%^&"
console.log(longestSubstringOf("abcd".repeat(10000) + "abcde" + "abcd".repeat(10000))); // "abcde"
