/**
 * solution 1 -- iterate and scan outwards
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number} num
 * @returns {number|"Not valid"}
 */
function palindrome(num) {
    if (!Number.isInteger(num) || num < 0) {
        return "Not valid";
    }

    if (num <= 9) {
        return 0;
    }

    const strNum = String(num);
    let globalCount = 0;

    // Stop at length - 1 because the last character
    // cannot start a new palindrome to its right.
    for (let i = 0; i < strNum.length - 1; i++) {
        // scan outwards left and right
        globalCount += expandAndCount(strNum, i - 1, i + 1);
        globalCount += expandAndCount(strNum, i, i + 1);
    }

    return globalCount;
}

console.log(palindrome(2)); // 0
console.log(palindrome(141221001)); // 5
console.log(palindrome(1551)); // 2
console.log(palindrome(13598)); // 0
console.log(palindrome("ACCDDCCA")); // "Not valid"
console.log(palindrome("1551")); // "Not valid"
console.log(palindrome(-4505)); // "Not valid"

/**
 * @param {string} str
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function expandAndCount(str, left, right) {
    let count = 0;

    // left and right haven't reached their ends yet AND left digit is the same as right digit
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        count++;
        left--;
        right++;
    }

    return count;
}
