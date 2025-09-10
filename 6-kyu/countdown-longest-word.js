let words = ["VAMPIRE", "STRATEGY"];

/**
 * solution 1
 * n = letters length
 * m = words length
 * x = word length
 * time: O(n + m * x)
 * space: O(n + x)
 *
 * @param {string} letters
 * @returns {string[]|null}
 */
function longestWord(letters) {
    let results = [];
    let lettersCount = new Map();
    let maxWordLength = 0;

    for (let letter of letters) {
        const letterCountPrevious = lettersCount.get(letter) || 0;
        lettersCount.set(letter, letterCountPrevious + 1);
    }

    outerWordLoop: for (let word of words) {
        let wordLettersCount = new Map();

        for (let char of word) {
            const charCountPrevious = wordLettersCount.get(char) || 0;
            wordLettersCount.set(char, charCountPrevious + 1);
        }

        for (let [wordLetter, wordLetterCount] of wordLettersCount) {
            const letterCount = lettersCount.get(wordLetter) || 0;

            if (letterCount < wordLetterCount) {
                continue outerWordLoop;
            }
        }

        results.push(word);
        // possible update to max word length
        maxWordLength = Math.max(maxWordLength, word.length);
    }

    if (results.length === 0) {
        return null;
    }

    // only return longest length(s) sorted
    return results.filter((word) => word.length === maxWordLength).sort();
}

console.log(longestWord("POVMERKIA")); // ["VAMPIRE"]
