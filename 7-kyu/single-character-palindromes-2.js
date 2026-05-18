/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @returns {boolean}
 */
function solve(str) {
    let leftPointer = 0;
    let rightPointer = str.length - 1;
    let diffCharsCount = 0;

    while (leftPointer < rightPointer) {
        if (str[leftPointer] !== str[rightPointer]) {
            diffCharsCount++;
        }

        leftPointer++;
        rightPointer--;
    }

    const isSingleCharDiff = diffCharsCount === 1;
    const isPreExistingOddLengthPalindrome = diffCharsCount === 0 && str.length % 2 !== 0;

    return isSingleCharDiff || isPreExistingOddLengthPalindrome;
}

console.log(solve("abbx")); // true (because we can convert 'x' to 'a' and get a palindrome)
console.log(solve("abba")); // false (because we cannot get a palindrome by changing any character)
console.log(solve("abcba")); // true (We can change the middle character) ***
console.log(solve("aa")); // false
console.log(solve("ab")); // true
