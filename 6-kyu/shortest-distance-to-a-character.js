"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1) -- not including mandatory results arr
 *
 * @param {string} s
 * @param {string} targetChar
 * @returns {number[]}
 */
function shortesttoChar(s, targetChar) {
    if (s === "" || targetChar === "" || s.indexOf(targetChar) === -1) {
        return [];
    }

    let results = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === targetChar) {
            results.push(0);
            // early exit from any additional work following
            continue;
        }

        // look left
        let leftDistance = Infinity;

        for (let left = i - 1; left >= 0; left--) {
            if (s[left] === targetChar) {
                leftDistance = i - left;

                break;
            }
        }

        // look right
        let rightDistance = Infinity;

        for (let right = i + 1; right < s.length; right++) {
            if (s[right] === targetChar) {
                rightDistance = right - i;

                break;
            }
        }

        const smallerDistance = Math.min(leftDistance, rightDistance);
        results.push(smallerDistance);
    }

    return results;
}

console.log(shortesttoChar("lovecodewars", "e")); // [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]
console.log(shortesttoChar("aaaaa", "a")); // [0, 0, 0, 0, 0]
console.log(shortesttoChar("aabbaabb", "a")); // [0, 0, 1, 1, 0, 0, 1, 2]
console.log(shortesttoChar("aaaabbbb", "b")); // [4, 3, 2, 1, 0, 0, 0, 0]
