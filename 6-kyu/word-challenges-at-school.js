/** @type {string[]} */
let wordList = [];

/**
 * solution 1 -- nested loops
 * n = word list length
 * m = forbidden letters length
 * time: O(n * m)
 * space: O(m)
 *
 * @param {number} n
 * @param {number} m
 * @param {string[]} forbiddenLetters
 * @returns {string[]}
 */
function wantedWords(n, m, forbiddenLetters) {
    const VOWELS = new Set("aeiou");
    const CONSONANTS = new Set("bcdfghjklmnpqrstvwxyz");
    const forbiddenLettersSet = new Set(forbiddenLetters);
    let results = [];

    wordLoop: for (let word of wordList) {
        let wordVowelCount = 0;
        let wordConsonantCount = 0;

        for (let char of word) {
            if (forbiddenLettersSet.has(char)) {
                continue wordLoop;
            }

            if (VOWELS.has(char)) {
                wordVowelCount++;
            }

            if (CONSONANTS.has(char)) {
                wordConsonantCount++;
            }
        }

        if (wordVowelCount === n && wordConsonantCount === m) {
            results.push(word);
        }
    }

    return results;
}
