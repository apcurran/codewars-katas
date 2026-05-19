/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @returns {"OK"|"remove one"|"not possible"}
 */
function solve(s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        if (s[leftPointer] === s[rightPointer]) {
            // check if left and right chars are the same, if so -> keep going
            leftPointer++;
            rightPointer--;
        } else {
            // MISMATCH found here
            // try removing one char from either left side or right side
            if (
                testPalindromeRange(s, leftPointer + 1, rightPointer) ||
                testPalindromeRange(s, leftPointer, rightPointer - 1)
            ) {
                return "remove one";
            } else {
                // removing either left or right char did not produce a palindrome
                return "not possible";
            }
        }
    }
    // all possible outcomes already tested, must be a palindrome
    return "OK";
}

console.log(solve("abba")); // "OK"
console.log(solve("abbaa")); // "remove one"
console.log(solve("abbaab")); // "not possible"

/**
 * @param {string} str
 * @param {number} left
 * @param {number} right
 * @returns {boolean}
 */
function testPalindromeRange(str, left, right) {
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}
